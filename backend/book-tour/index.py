import json
import smtplib
import os
import urllib.request
import urllib.parse
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any
from pydantic import BaseModel, Field, EmailStr, field_validator


class BookingRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    phone: str = Field(..., min_length=10, max_length=20)
    email: EmailStr
    tour: str = Field(..., min_length=1)
    comment: str = Field(default="", max_length=1000)
    
    @field_validator('phone')
    @classmethod
    def validate_phone(cls, v: str) -> str:
        cleaned = ''.join(filter(str.isdigit, v))
        if len(cleaned) < 10:
            raise ValueError('Телефон должен содержать минимум 10 цифр')
        return v


def send_telegram_message(bot_token: str, chat_id: str, message: str) -> None:
    url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
    data = urllib.parse.urlencode({
        'chat_id': chat_id,
        'text': message,
        'parse_mode': 'HTML'
    }).encode('utf-8')
    
    req = urllib.request.Request(url, data=data)
    urllib.request.urlopen(req)


def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Отправляет заявку на бронирование тура на email и в Telegram
    '''
    method: str = event.get('httpMethod', 'GET')
    
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
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Метод не поддерживается'}),
            'isBase64Encoded': False
        }
    
    body_data = json.loads(event.get('body', '{}'))
    booking = BookingRequest(**body_data)
    
    email_host = os.environ.get('EMAIL_HOST')
    email_port = int(os.environ.get('EMAIL_PORT', '587'))
    email_user = os.environ.get('EMAIL_USER')
    email_password = os.environ.get('EMAIL_PASSWORD')
    email_to = os.environ.get('EMAIL_TO')
    
    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка на бронирование тура: {booking.tour}'
    msg['From'] = email_user
    msg['To'] = email_to
    
    html_body = f'''
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            🎒 Новая заявка на бронирование
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; font-weight: bold; width: 30%;">Имя:</td>
              <td style="padding: 10px;">{booking.name}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold;">Телефон:</td>
              <td style="padding: 10px;">{booking.phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Email:</td>
              <td style="padding: 10px;">{booking.email}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold;">Тур:</td>
              <td style="padding: 10px; color: #2563eb; font-weight: bold;">{booking.tour}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; vertical-align: top;">Комментарий:</td>
              <td style="padding: 10px;">{booking.comment if booking.comment else '<em>Не указан</em>'}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #f0f9ff; border-left: 4px solid #2563eb;">
            <p style="margin: 0; font-size: 14px;">
              📞 Свяжитесь с клиентом в ближайшее время для подтверждения бронирования
            </p>
          </div>
        </div>
      </body>
    </html>
    '''
    
    msg.attach(MIMEText(html_body, 'html', 'utf-8'))
    
    email_sent = False
    email_error = None
    
    try:
        if email_port == 465:
            with smtplib.SMTP_SSL(email_host, email_port) as server:
                server.login(email_user, email_password)
                server.send_message(msg)
        else:
            with smtplib.SMTP(email_host, email_port) as server:
                server.starttls()
                server.login(email_user, email_password)
                server.send_message(msg)
        email_sent = True
        print(f"✅ Email успешно отправлен на {email_to}")
    except Exception as e:
        email_error = str(e)
        print(f"❌ Ошибка отправки email: {email_error}")
        print(f"Email настройки: host={email_host}, port={email_port}, user={email_user}")
    
    telegram_token = os.environ.get('TELEGRAM_BOT_TOKEN')
    telegram_chat_id = os.environ.get('TELEGRAM_CHAT_ID')
    
    telegram_sent = False
    telegram_error = None
    
    if telegram_token and telegram_chat_id:
        try:
            telegram_message = f'''🎒 <b>Новая заявка на бронирование</b>

<b>Имя:</b> {booking.name}
<b>Телефон:</b> {booking.phone}
<b>Email:</b> {booking.email}
<b>Тур:</b> {booking.tour}
<b>Комментарий:</b> {booking.comment if booking.comment else 'Не указан'}

📞 Свяжитесь с клиентом в ближайшее время!'''
            
            send_telegram_message(telegram_token, telegram_chat_id, telegram_message)
            telegram_sent = True
            print(f"✅ Telegram сообщение отправлено в чат {telegram_chat_id}")
        except Exception as e:
            telegram_error = str(e)
            print(f"❌ Ошибка отправки в Telegram: {telegram_error}")
    
    response_data = {
        'success': email_sent or telegram_sent,
        'message': 'Заявка успешно отправлена',
        'details': {
            'email': {'sent': email_sent, 'error': email_error},
            'telegram': {'sent': telegram_sent, 'error': telegram_error}
        }
    }
    
    return {
        'statusCode': 200,
        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        'body': json.dumps(response_data),
        'isBase64Encoded': False
    }