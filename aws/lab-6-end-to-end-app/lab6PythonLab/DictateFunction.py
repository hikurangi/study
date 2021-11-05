# PollyNotes-DictateFunction
#
# This lambda function is integrated with the following API methods:
# /notes/{id}/POST
#
# This function does the following:
# 1. Takes a JSON payload from API gateway
# 2. Calls DynamoDB to fetch the note text from the userId and noteId
# 3. Calls the Polly synthensize_speech API to convert text to speech
# 4. Stores the resulting audio in an MP3 file in /tmp
# 5. Uploads the MP3 file to S3
# 6. Creates a pre-signed URL for the MP3 file
# 7. Returns the pre-signed URL to API Gateway

from __future__ import print_function
import boto3
import os
from contextlib import closing

def lambda_handler(event, context):

    print('Commencing PollyNotes-DictateFunction...')
    
    # Extracting the userId and noteId from the event
    userId = event['note']['userId']
    noteId = event['note']['noteId']
    
    # Create our DynamoDB resource using our Environment Variable for table name
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('pollynotes')
    
    # Get the note from DynamoDB from the event parameters
    response = table.get_item(
        Key={
            'userId': userId,
            'noteId': noteId
        }
    )
    text = response['Item']['note']

    # Invoke Polly API, which will transform text into audio
    polly = boto3.client('polly') 
    response = polly.synthesize_speech(
        OutputFormat='mp3',
        Text = text,
        VoiceId = event['voiceId']
    )
    
    # Save the audio stream returned by Amazon Polly on Lambda's temp 
    # directory '/tmp'
    if "AudioStream" in response:
        postId = str(noteId)
        with closing(response["AudioStream"]) as stream:
            output = os.path.join("/tmp/", postId)
            with open(output, "wb") as file:
                file.write(stream.read())    
        
    # Upload our local file to S3
    s3 = boto3.client('s3')
    s3.upload_file('/tmp/' + noteId, 
    os.environ['MP3_BUCKET_NAME'], 
    userId+'/'+noteId+'.mp3')  

    # Generate a pre-signed URL
    url = s3.generate_presigned_url(
    ClientMethod='get_object',
        Params={
            'Bucket': os.environ['MP3_BUCKET_NAME'],
            'Key': userId+'/'+noteId+'.mp3'
        }
    )

    # Return the presigned URL to API Gateway
    return url