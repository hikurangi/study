# Copyright 2017 Amazon Web Services, Inc. or its affiliates. All rights
# reserved.

import boto3
import sys
import csv
import os
from botocore.exceptions import ClientError, NoCredentialsError, BotoCoreError

BUCKET_WITH_FILES = "us-west-2-aws-staging"

LAB_BUCKET_DATA_FILE_KEYS = [
    'awsu-ilt/AWS-100-DEV/v2.2/binaries/input/lab-6-lambda/DrugAdverseEvents_September.txt',
    'awsu-ilt/AWS-100-DEV/v2.2/binaries/input/lab-6-lambda/DrugAdverseEvents_October.txt'
]

STUDENT_BUCKET_DATA_FILE_KEYS = ['DrugAdverseEvents_September.txt',
                                 'DrugAdverseEvents_October.txt']


def setup(inputbucket, outputbucket, region):
    s3 = boto3.resource('s3')
    setup_bucket(s3, inputbucket, region)
    download_files()
    copy_files_to_input_bucket(s3, inputbucket)
    setup_bucket(s3, outputbucket, region)


def setup_bucket(s3, bucket, region):
    exists = True
    try:
        # Check if you have permissions to access the bucket
        s3.meta.client.head_bucket(Bucket=bucket)
        # Delete any existing objects in the bucket
        s3.Bucket(bucket).objects.delete()
    except NoCredentialsError as e:
        print("Error: " + e.response['Error']['Code'] +
              " " + e.response['Error']['Message'])
        sys.exit()
    except ClientError as e:
        error_code = int(e.response['Error']['Code'])
        if error_code == 404:
            exists = False
            # Bucket does not exist, so create it.
            # Do not specify a LocationConstraint if the region is us-east-1 -
            # S3 does not like this!!
            create_bucket_config = {}
            if region != "us-east-1":
                create_bucket_config["LocationConstraint"] = region
                s3.create_bucket(Bucket=bucket, CreateBucketConfiguration=create_bucket_config)
            else:
                s3.create_bucket(Bucket=bucket)
            print('Created bucket: ' + bucket)
        else:
            print("Specify a unique bucket name. Bucket names can contain lowercase letters, numbers, and hyphens.")
            print(
                "It is possible that a bucket with the name '" +
                bucket +
                "' already exists. You may not have permissions to access the bucket.")
            print("Error: " + e.response['Error']['Code'] +
                  " " + e.response['Error']['Message'])
            sys.exit()


def download_files():
    s3labbucket = boto3.resource('s3', 'us-west-2')
    try:
        s3labbucket.meta.client.head_bucket(Bucket=BUCKET_WITH_FILES)
    except NoCredentialsError as e:
        print("Invalid credentials")
        sys.exit()

    for index1 in range(len(STUDENT_BUCKET_DATA_FILE_KEYS)):
        name = LAB_BUCKET_DATA_FILE_KEYS[index1]
        key = STUDENT_BUCKET_DATA_FILE_KEYS[index1]
        s3labbucket.meta.client.download_file(BUCKET_WITH_FILES, name, key)
        print('Downloaded file ' + key)


def copy_files_to_input_bucket(s3, inputbucket):
    for index1 in range(len(STUDENT_BUCKET_DATA_FILE_KEYS)):
        name = LAB_BUCKET_DATA_FILE_KEYS[index1]
        key = STUDENT_BUCKET_DATA_FILE_KEYS[index1]
        try:
            s3.meta.client.upload_file(key, inputbucket, key)
        except NoCredentialsError as e:
            print("Invalid credentials")
            sys.exit()
        except ClientError as e:
            print(e)
            print('Unable to upload files')

        print('Uploaded file ' + key)
