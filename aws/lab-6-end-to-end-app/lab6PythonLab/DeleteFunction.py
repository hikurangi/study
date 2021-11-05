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

    # EXAMPLE INPUT PAYLOAD FROM API GATEWAY
    #
    # {
    #    "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", 
    #    "noteId": "001" 
    # }
    
    # EXAMPLE RETURN / OUTPUT PAYLOAD 
    # "001" if successful or "" if failed
    
    # TODO 1:
    # Develop your own code to take the input and delete an item in DynamoDB.
    # You should return either the noteId (eg 005) if successful or "".
    
    return ""