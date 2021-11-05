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

    
############### TODO: REPLACE EVERYTHING BELOW THIS LINE ############################
################### INCLUDING THE STUB RESPONSE AND RETURN ##################################
    
    # EXAMPLE INPUT PAYLOAD FROM API GATEWAY
    
    # {
    #    "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", 
    #    "note": "Wow" 
    # }
 
    # EXAMPLE RETURN / OUTPUT PAYLOAD 
    # [{'userId': 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', 'note': 'Wow, did you really just press my button?', 'noteId': '001'}]
    
    # TODO 1:
    # Develop your own code to take the input and search for items within DynamoDB
    # Return items that contain the search string. REPLACE THE BELOW MOCK.
    
    
    stubResponse = '[{"userId": "testuser", "note": "This is a mock response being returned by Lambda", "noteId": "001"}]'
    
    stubJSON = json.loads(stubResponse)
    
    return stubJSON