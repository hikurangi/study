# ListFunction
#
# This lambda function is integrated with the following API methods:
# /notes GET (list operation)
#
# Its purpose is to get notes from our DynamoDB table

from __future__ import print_function
import boto3
import json
from boto3.dynamodb.conditions import Key
from botocore.exceptions import ClientError

def lambda_handler(event, context):

############### TODO: REPLACE EVERYTHING BELOW THIS LINE ############################
################### INCLUDING THE STUB RESPONSE AND RETURN ##################################
    
    # EXAMPLE INPUT PAYLOAD FROM API GATEWAY
    
    # {
    #    "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    # }
 
    # EXAMPLE RETURN / OUTPUT PAYLOAD 
    #
    # '[{"userId": "testuser", "note": "This is a mock response being returned by Lambda", "noteId": "001"}]'
    
    # TODO 1:
    #
    # Develop your own code to take the input userId, query DynamoDB and 
    # then return a list of items that belong to that user. REPLACE THE BELOW STUB.
    
    stubResponse = '[{"userId": "testuser", "note": "This is a stub response being returned by Lambda", "noteId": "001"}]'
    
    stubJSON = json.loads(stubResponse)
    
    return stubJSON
