# Copyright 2017 Amazon Web Services, Inc. or its affiliates. All rights
# reserved.

NUM_MESSAGES = 10

# The Order class is a simple Python class used to hold order information.


class Order:

    def __init__(self, orderDict=None):
        self.orderId, self.orderDate, self.orderDetails = 0, "", ""
        self.senderId, self.sentTimestamp = "", ""
        if orderDict:
            if orderDict.get('orderId') and orderDict.get(
                    'orderDate') and orderDict.get('orderDetails'):
                self.orderId = orderDict['orderId']
                self.orderDate = orderDict['orderDate']
                self.orderDetails = orderDict['orderDetails']

    def get_order_id(self):
        return self.orderId

    def set_order_id(self, orderId):
        self.orderId = orderId

    def get_order_date(self):
        return self.orderDate

    def set_order_date(self, orderDate):
        self.orderDate = orderDate

    def get_order_details(self):
        return self.orderDetails

    def set_order_details(self, orderDetails):
        self.orderDetails = orderDetails

    def get_sender_id(self):
        return self.senderId

    def set_sender_id(self, senderId):
        self.senderId = senderId

    def get_sent_timestamp(self):
        return self.sentTimestamp

    def set_sent_timestamp(self, sentTimestamp):
        self.sentTimestamp = sentTimestamp

    def __repr__(self):
        rval = " orderId: %d,\n senderId: %s,\n sentTimestamp: %s,\n orderDate: %s,\n orderDetails: %s\n" % (
            self.orderId, self.senderId, self.sentTimestamp, self.orderDate, self.orderDetails)
        return rval


def jdefault(obj):
    return obj.__dict__
