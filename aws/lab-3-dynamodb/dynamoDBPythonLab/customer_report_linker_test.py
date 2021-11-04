# Copyright 2017 Amazon Web Services, Inc. or its affiliates. All rights
# reserved.

import unittest
import boto3
import warnings
import utils

TABLE_NAME = utils.LAB_S3_RESERVATIONS_TABLE_NAME


class CustomerReportLinkerTest(unittest.TestCase):

    def test_report_link(self):
        warnings.simplefilter("ignore", ResourceWarning)
        dynamodb = boto3.resource('dynamodb')
        myTable = dynamodb.Table(TABLE_NAME)
        for i in range(1, 4):
            isPresent = False
            rec = myTable.get_item(
                Key={'CustomerId': str(i)})
            if rec.get('Item').get('CustomerReportUrl'):
                isPresent = True
            self.assertTrue(isPresent)

if __name__ == '__main__':
    unittest.main()
