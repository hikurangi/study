# Copyright 2017 Amazon Web Services, Inc. or its affiliates. All rights
# reserved.

import sys
from datetime import datetime, timedelta
import boto3
import utils
import solution as dynamodb_solution

BUCKET_NAME = utils.LAB_S3_BUCKET_NAME
BUCKET_REGION = utils.LAB_S3_BUCKET_REGION
CUSTOMER_REPORT_PREFIX = utils.LAB_S3_CUSTOMER_REPORT_PREFIX
reservations_table_name = utils.LAB_S3_RESERVATIONS_TABLE_NAME
HTTP_STATUS_SUCCESS = 200

# Sample reports exist for customer ids 1, 2, 3


def link_customer_report(table_name=reservations_table_name):
    dynamodb = boto3.resource('dynamodb')
    # Update Reservations table item for customer ids 1, 2, 3 with the report url
    try:
        for i in range(1, 4):
            object_key = CUSTOMER_REPORT_PREFIX + str(i) + ".txt"
            # Construct the URL for the customer report
            report_url = "https://s3-{0}.amazonaws.com/{1}/{2}".format(
                BUCKET_REGION, BUCKET_NAME, object_key)
            update_item_with_link(dynamodb, i, report_url, table_name)
    except Exception as err:
        print("Error message {0}".format(err))


def update_item_with_link(dynamodb, customer_id, report_url, table_name):
    """Update an item in the table

    Keyword arguments:
    dynamodb -- DynamoDB resource
    customer_id -- Customer ID
    report_url -- Report URL
    table_name -- Table name
    """

    # TODO 3: Replace the solution with your own code
    dynamodb_solution.update_item_with_link(
        dynamodb, table_name, customer_id, report_url)

if __name__ == '__main__':
    print("Update report url for customer ids 1, 2, 3:")
    link_customer_report()
