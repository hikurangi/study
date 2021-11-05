# PollyNotes-DeleteFunction
# This function allows us to create, update and delete items in DynamoDB
#
# This lambda function is integrated with the following API method:
# /notes/{id} DELETE (delete a note)

from __future__ import print_function
import boto3
import json
from boto3.dynamodb.conditions import Key, Attr
from botocore.exceptions import ClientError

def lambda_handler(event, context):

    print('Initiating PollyNotes-DeleteFunction...')
    print("Received event from API Gateway: " + json.dumps(event, indent=2))

    # We are now going to create our DynamoDB resource using
    # our Environment Variable for table name
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('pollynotes')

    # DynamoDB 'delete_item' to delete a note
 
        
    try:
        response = table.delete_item(
            Key={
                'userId': event["userId"],
                'noteId': event["noteId"]
            }
        )
    except ClientError as e:
        print(e.response['Error']['Message'])
        print('Check your DynamoDB table...')
    else:
        print("DynamoDB delete_item succeeded:")
        # If the delete_item was successful (200 OK), return the noteId
        # Return only the Items and not the whole response from DynamoDB
        if response['ResponseMetadata']['HTTPStatusCode'] == 200:
            # Return the noteId that was inserted
            return event["noteId"]
        else:
            return ""