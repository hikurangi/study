# PollyNotes-CreateUpdateFunction
# This function allows us to create, update and delete items in DynamoDB
#
# This lambda function is integrated with the following API method:
# /notes POST (create or update a note)

from __future__ import print_function
import boto3
import json
from boto3.dynamodb.conditions import Key, Attr
from botocore.exceptions import ClientError

def lambda_handler(event, context):

    print('Initiating PollyNotes-CreateUpdateFunction...')
    print("Received event from API Gateway: " + json.dumps(event, indent=2))

    # We are now going to create our DynamoDB resource using
    # our Environment Variable for table name
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('pollynotes')
     
    try:
        # DynamoDB 'put_item' to add a new note
        response = table.put_item(
            Item={
                'userId': event["userId"],
                'noteId': event["noteId"],
                'note': event["note"]
            }
        )
    except ClientError as e:
        print(e.response['Error']['Message'])
        print('Check your DynamoDB table...')
    else:
        print("DynamoDB put_item succeeded:")
            # If the put_item was successful (200 OK), return the noteId
        if response['ResponseMetadata']['HTTPStatusCode'] == 200:
            # Return the noteId that was inserted
            return event["noteId"]
        else:
            return ""
