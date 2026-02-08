import json
import os
import urllib.request
import urllib.parse
from typing import Dict, Any

from datetime import datetime


def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Обработка заявок на обратный звонок от клиентов
    Отправляет уведомление в Telegram
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
        
        # Отправляем уведомление в Telegram
        # Значения могут быть перепутаны, проверяем формат
        token_raw = os.environ.get('TELEGRAM_BOT_TOKEN', '')
        chat_id_raw = os.environ.get('TELEGRAM_CHAT_ID', '')
        
        # Определяем, где токен, а где chat_id по формату
        if ':' in chat_id_raw:
            # Значения перепутаны
            telegram_token = chat_id_raw
            telegram_chat_id = token_raw
        else:
            telegram_token = token_raw
            telegram_chat_id = chat_id_raw
        
        if not telegram_token or not telegram_chat_id:
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Telegram не настроен. Добавьте TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID в секреты проекта'}),
                'isBase64Encoded': False
            }
        
        now = datetime.now().strftime('%d.%m.%Y %H:%M')
        
        message = f"""🔔 <b>Новая заявка на обратный звонок!</b>

👤 <b>Гид:</b> {guide_name}
📱 <b>Телефон гида:</b> {guide_phone}

━━━━━━━━━━━━━━━━━━━━
<b>Данные клиента:</b>

<b>Имя:</b> {client_name}
<b>Телефон:</b> {client_phone}"""
        
        if preferred_time:
            message += f"\n<b>Удобное время:</b> {preferred_time}"
        
        if comment:
            message += f"\n<b>Комментарий:</b> {comment}"
        
        message += f"\n\n⏰ <b>Время заявки:</b> {now}"
        
        telegram_url = f"https://api.telegram.org/bot{telegram_token}/sendMessage"
        telegram_data = urllib.parse.urlencode({
            'chat_id': telegram_chat_id,
            'text': message,
            'parse_mode': 'HTML'
        }).encode('utf-8')
        
        urllib.request.urlopen(telegram_url, data=telegram_data)
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'message': 'Заявка успешно отправлена'
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