import json
import os
import psycopg2
import urllib.request
import urllib.parse
from typing import Dict, Any


def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Обработка заявок на обратный звонок от клиентов
    Сохраняет заявку в базу данных и отправляет уведомление в Telegram
    '''
    method: str = event.get('httpMethod', 'GET')
    
    # Handle CORS OPTIONS request
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    try:
        body_data = json.loads(event.get('body', '{}'))
        
        guide_name = body_data.get('guideName', '')
        guide_phone = body_data.get('guidePhone', '')
        client_name = body_data.get('clientName', '')
        client_phone = body_data.get('clientPhone', '')
        preferred_time = body_data.get('preferredTime', '')
        comment = body_data.get('comment', '')
        
        if not all([guide_name, guide_phone, client_name, client_phone]):
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Не все обязательные поля заполнены'}),
                'isBase64Encoded': False
            }
        
        # Сохраняем в базу данных
        conn = psycopg2.connect(os.environ['DATABASE_URL'])
        cursor = conn.cursor()
        
        cursor.execute(
            "INSERT INTO callback_requests (guide_name, guide_phone, client_name, client_phone, preferred_time, comment) "
            "VALUES (%s, %s, %s, %s, %s, %s) RETURNING id",
            (guide_name, guide_phone, client_name, client_phone, preferred_time, comment)
        )
        
        request_id = cursor.fetchone()[0]
        conn.commit()
        cursor.close()
        conn.close()
        
        # Отправляем уведомление в Telegram
        telegram_token = os.environ.get('TELEGRAM_BOT_TOKEN', '')
        telegram_chat_id = os.environ.get('TELEGRAM_CHAT_ID', '')
        
        if telegram_token and telegram_chat_id:
            message = f"""🔔 Новая заявка на обратный звонок №{request_id}

👤 Клиент: {client_name}
📞 Телефон клиента: {client_phone}
⏰ Удобное время: {preferred_time or 'Не указано'}
💬 Комментарий: {comment or 'Нет'}

🎯 Гид: {guide_name}
📱 Телефон гида: {guide_phone}"""
            
            telegram_url = f"https://api.telegram.org/bot{telegram_token}/sendMessage"
            telegram_data = urllib.parse.urlencode({
                'chat_id': telegram_chat_id,
                'text': message,
                'parse_mode': 'HTML'
            }).encode('utf-8')
            
            try:
                urllib.request.urlopen(telegram_url, data=telegram_data)
            except Exception:
                pass  # Не критично, если уведомление не отправилось
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'message': 'Заявка успешно отправлена',
                'requestId': request_id
            }),
            'isBase64Encoded': False
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': f'Ошибка сервера: {str(e)}'}),
            'isBase64Encoded': False
        }
