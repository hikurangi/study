// Copyright 2017 Amazon Web Services, Inc. or its affiliates. All rights reserved.

namespace Lab5
{
    public class Order
    {
        private int orderId;
        private string orderDate;
        private string orderDetails;
        private string senderId;
        private string sentTimestamp;

        public Order()
        {

        }

        public Order(int id, string date, string details)
        {
            this.orderId = id;
            this.orderDate = date;
            this.orderDetails = details;
        }

        public int MyOrderId
        {
            get
            {
                return orderId;
            }
            set
            {
                orderId = value;
            }
        }

        public string MyOrderDate
        {
            get
            {
                return orderDate;
            }
            set
            {
                orderDate = value;
            }
        }

        public string MyOrderDetails
        {
            get
            {
                return orderDetails;
            }
            set
            {
                orderDetails = value;
            }
        }

        public string MySenderId
        {
            get
            {
                return senderId;
            }
            set
            {
                senderId = value;
            }
        }

        public string MySentTimestamp
        {
            get
            {
                return sentTimestamp;
            }
            set
            {
                sentTimestamp = value;
            }
        }

        public override string ToString()
        {
            return string.Format("Order id: {0} senderId: {1} sentTimestamp: {2} orderDate: {3} orderDetails: {4}", orderId, senderId, sentTimestamp, orderDate, orderDetails);
        }
    }
}
