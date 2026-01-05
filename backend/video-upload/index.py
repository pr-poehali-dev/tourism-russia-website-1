import json
import os
import boto3
import base64
from datetime import datetime

def handler(event: dict, context) -> dict:
    """API для загрузки видео файлов в облачное хранилище"""
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }

    if method == 'POST':
        try:
            body = json.loads(event.get('body', '{}'))
            video_data = body.get('video')
            filename = body.get('filename', 'video.mp4')
            
            if not video_data:
                return {
                    'statusCode': 400,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({'error': 'No video data provided'})
                }
            
            # Decode base64 video
            video_bytes = base64.b64decode(video_data)
            
            # Generate unique filename
            timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
            unique_filename = f"videos/{timestamp}_{filename}"
            
            # Upload to S3
            s3 = boto3.client('s3',
                endpoint_url='https://bucket.poehali.dev',
                aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
                aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY']
            )
            
            # Determine content type
            content_type = 'video/mp4'
            if filename.endswith('.webm'):
                content_type = 'video/webm'
            elif filename.endswith('.ogg'):
                content_type = 'video/ogg'
            
            s3.put_object(
                Bucket='files',
                Key=unique_filename,
                Body=video_bytes,
                ContentType=content_type
            )
            
            # Generate CDN URL
            cdn_url = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/bucket/{unique_filename}"
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'url': cdn_url,
                    'filename': unique_filename
                })
            }
            
        except Exception as e:
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': str(e)})
            }
    
    return {
        'statusCode': 405,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'error': 'Method not allowed'})
    }
