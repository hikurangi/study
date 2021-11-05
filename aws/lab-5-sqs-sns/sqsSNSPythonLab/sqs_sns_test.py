# Copyright 2017 Amazon Web Services, Inc. or its affiliates. All rights
# reserved.

import unittest
import warnings
import time
import sys
import utils
import sns_publisher
import sqs_consumer
import boto3

QUEUE_NAME = "MySQSQueue_A"
QUEUE_ATTR_NAME = "ApproximateNumberOfMessages"

SLEEP = 10


class SqsSnsTest(unittest.TestCase):

    def test(self):
        warnings.simplefilter("ignore", ResourceWarning)
        try:
            initialNumMessages = self.get_num_of_messages()

            sns_publisher.main()
            numAfterSnsPublisher = self.get_num_of_messages()

            thread1 = sqs_consumer.main()
            thread1.join()
            numAfterSQSConsumer = self.get_num_of_messages()

            print(
                "SqsSnsTest: initialNumMessages: {0}; numAfterSnsPublisher: {1}; numAfterSQSConsumer {2}".format(
                    initialNumMessages,
                    numAfterSnsPublisher,
                    numAfterSQSConsumer))

            if ((numAfterSnsPublisher <= initialNumMessages)
                    or (initialNumMessages != numAfterSQSConsumer)):
                self.fail(
                    "SqsSnsTest failed. Number of messages in queue not as expected.")
        except Exception as err:
            print("Error Message {0}".format(err))
            sys.exit(1)

    def get_queue(self, sqsQueueName=QUEUE_NAME):
        # TODO: Get the SQS queue using the SQS resource object and
        # QUEUE_NAME
        queue = None
        try:
            sqs = boto3.resource('sqs')
            queue = sqs.get_queue_by_name(QueueName=sqsQueueName)
        except Exception as err:
            print("Error Message {0}".format(err))
        return queue

    def get_num_of_messages(self, sqsQueueName=QUEUE_NAME):
        numMessages = 0
        try:
            print("Thread sleeping for a few seconds")
            time.sleep(SLEEP)
            print("Thread running.")
            queue = self.get_queue(sqsQueueName)
            if queue:
                attribs = queue.attributes
                numMessages = int(attribs.get(QUEUE_ATTR_NAME))
        except Exception as err:
            print("Error Message {0}".format(err))
        return numMessages

if __name__ == '__main__':
    unittest.main()
