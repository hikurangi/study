# Copyright 2017 Amazon Web Services, Inc. or its affiliates. All rights
# reserved.

import boto3
from boto3.dynamodb.conditions import Key
import sys
from datetime import datetime, timedelta
import utils
import solution as dynamodb_solution

RESERVATIONS_TABLE_NAME = utils.LAB_S3_RESERVATIONS_TABLE_NAME
CITY_DATE_INDEX_NAME = "ReservationsByCityDate"


def query_by_city(city):
    print("City name is {0}".format(city))
    # Query Reservations table based on the input city and count the number of
    # reservations
    count_for_city = 0
    try:
        dynamodb = boto3.resource('dynamodb')
        recs = query_city_related_items(
            dynamodb, RESERVATIONS_TABLE_NAME, CITY_DATE_INDEX_NAME, city)

        # Retrieves and prints from recs dictionary returned by the query.
        for rec in recs['Items']:
            print("\t", rec['CustomerId'], rec['Date'])
        count_for_city = len(recs['Items'])
        print("Count of Reservations in the city: {0}".format(count_for_city))
    except Exception as err:
        print("Error Message: {0}".format(err))
    return count_for_city


def query_city_related_items(dynamodb, reservations_table_name, gsi_name, city):
    """Return the items returned by the query

    Keyword arguments:
    dynamodb -- DynamoDB resource
    reservations_table_name -- Table name
    gsi_name -- Table index name
    city -- City name
    """

    # TODO 2: Replace the solution with your own code
    return dynamodb_solution.query_city_related_items(
        dynamodb, reservations_table_name, gsi_name, city)

if __name__ == '__main__':
    print("Querying items by city")
    query_by_city(city="Reno")
