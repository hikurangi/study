# PollyNotes-SearchFunction
#
# This lambda function is integrated with the following API method:
# /notes/search GET (search)
#
# Its purpose is to get notes from our DynamoDB table

from __future__ import print_function
import boto3
import json
from boto3.dynamodb.conditions import Key, Attr
from botocore.exceptions import ClientError

def lambda_handler(event, context):

    print('Initiating PollyNotes-SearchFunction...')
    print("Received event from API Gateway: " + json.dumps(event, indent=2))
    
    # Create our DynamoDB resource using our Environment Variable for table name
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('pollynotes')

    # Perform a scan and query the 'note' attribute, filter results to match expression
    # DynamoDB scan with Filter expression

    try:
        response = table.query(
        KeyConditionExpression=Key("userId").eq(event["userId"]),
        FilterExpression=Attr("note").contains(event["note"])
        )
    except ClientError as e:
        print(e.response['Error']['Message'])
        print('Check your DynamoDB table...')
    else:
        print("DynamoDB query succeeded:")
        print("Received response from DynamoDB: " + json.dumps(response, indent=2))
        # Return only the Items and not the whole response from DynamoDB
        return response["Items"]