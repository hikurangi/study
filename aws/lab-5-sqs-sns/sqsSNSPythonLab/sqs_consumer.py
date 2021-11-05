# Copyright 2017 Amazon Web Services, Inc. or its affiliates. All rights
# reserved.

import threading
import time
import utils
import solution
import boto3

QUEUE_NAME = "MySQSQueue_A"
QUEUE_ATTR_NAME = "ApproximateNumberOfMessages"
SLEEP = 10

# The SQSConsumer class retrieves messages from an SQS queue.


class SQSConsumer(threading.Thread):
    sqs = boto3.resource('sqs')

    def __init__(self, threadID, name, counter):
        threading.Thread.__init__(self)
        self.threadID = threadID
        self.name = name
        self.counter = counter

    def run(self):
        print("SQSConsumer Thread running!")
        max_retry = 5
        num_msgs = 0
        max_msgs = self.get_num_of_messages()
        count = 0
        print("No. of Messages to consume:", max_msgs)
        while num_msgs < max_msgs or count < max_retry:
            time.sleep(SLEEP)
            num_msgs += self.consume_messages()
            count += 1
            print("Iteration No.:", count, num_msgs)
        print("SQSConsumer Thread stopped!")

    def get_queue(self, sqsQueueName=QUEUE_NAME):
        queue = None
        try:
            queue = get_sqs_queue(self.sqs, sqsQueueName)
        except Exception as err:
            print("Error Message {0}".format(err))
        return queue

    def get_num_of_messages(self):
        numMessages = 0
        try:
            queue = self.get_queue()
            if queue:
                attribs = queue.attributes
                numMessages = int(attribs.get(QUEUE_ATTR_NAME))
        except Exception as err:
            print("Error Message {0}".format(err))
        return numMessages

    def consume_messages(self, sqsQueueName=QUEUE_NAME):
        num_msgs = 0
        try:
            queue = self.get_queue()
            if queue:
                mesgs = get_messages(queue)
                if not len(mesgs):
                    print("There are no messages in Queue to display")
                    return num_msgs
                for mesg in mesgs:
                    attributes = get_attributes(mesg)
                    sender_id = attributes.get('SenderId')
                    sent_timestamp = attributes.get('SentTimestamp')

                    bd = mesg.body
                    order_dict = eval(bd)
                    porder = utils.Order(order_dict)
                    # Adds message metadata to Order object.
                    porder.set_sender_id(sender_id)
                    porder.set_sent_timestamp(sent_timestamp)
                    print(porder)

                    self.delete_message(queue, mesg)
                    time.sleep(1)
                num_msgs = len(mesgs)
        except Exception as err:
            print("Error Message {0}".format(err))
        return num_msgs

    def delete_message(self, queue, mesg):
        try:
            delete_message(mesg)
            print("Message deleted from Queue")
            return True
        except Exception as err:
            print("Error Message {0}".format(err))
        return False


def get_sqs_queue(sqs, queue_name):
    """Return the SQS queue

    Keyword arguments:
    sqs -- SQS service resource
    queue_name -- SQS queue name
    """

    # TODO 6: Replace the solution with your own code
    return solution.get_sqs_queue(sqs, queue_name)


def get_messages(queue):
    """Return the messages from the SQS queue

    Keyword arguments:
    queue -- SQS queue
    """

    # TODO 7: Replace the solution with your own code
    return solution.get_messages(queue)


def get_attributes(mesg):
    """Return the attributes of the SQS message

    Keyword arguments:
    mesg -- SQS message
    """

    # TODO 8: Replace the solution with your own code
    return solution.get_attributes(mesg)


def delete_message(mesg):
    """Delete the message from the SQS queue

    Keyword arguments:
    mesg -- the SQS message
    """

    # TODO 9: Replace the solution with your own code
    solution.delete_message(mesg)


def main():
    try:
        thread1 = SQSConsumer(1, "Thread-1", 1)
        thread1.start()
    except Exception as err:
        print("Error Message {0}".format(err))
    thread1.join()
    return thread1

if __name__ == '__main__':
    main()
