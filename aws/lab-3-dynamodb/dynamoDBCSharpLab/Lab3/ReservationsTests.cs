// Copyright 2017 Amazon Web Services, Inc. or its affiliates. All rights reserved.

using Amazon.DynamoDBv2.Model;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Diagnostics;

namespace Lab3
{
    [TestClass]
    //@Test
    public class ReservationsTests
    {
        [TestMethod]
        public void TestCustomerReportLinker()
        {
            CustomerReportLinker.main();

            // Checks if CustomerReportUrl attribute is present.
            for (int i = 1; i < 4; i++)
            {
                Dictionary<string, AttributeValue> key = new Dictionary<string, AttributeValue>
                {
                    { "CustomerID", new AttributeValue { S = "" + i } }
                };

                // Create GetItem request
                GetItemRequest request = new GetItemRequest
                {
                    TableName = CustomerReportLinker.ReservationsTableName,
                    Key = key,
                };

                GetItemResponse response = CustomerReportLinker.dynamoDBClient.GetItem(request);

                bool customerReportUrlAttrPresent = false;

                if(response.Item["CustomerReportUrl"].S.ToString() != null)
                {
                    customerReportUrlAttrPresent = true;
                }

                Debug.WriteLine("Test - CustomerID: {0}, CustomerReportUrlAttrPresent: {1}", i, customerReportUrlAttrPresent);

                if (customerReportUrlAttrPresent == false)
                {
                    Assert.Fail("Customer Report Linker Failure");
                }
            }
        }

        [TestMethod]
        public void TestReservationsStatistics()
        {
            ReservationsStatistics.main(new string[] { "Reno" });
            if(ReservationsStatistics.itemCount != 178)
            {
                Assert.Fail("Reservations Statistics Failure");
            }
        }

        [TestMethod]
        public void TestTableCreation()
        {
            ReservationsTableCreator.main();
            try
            {
                ReservationsTableCreator.dynamoDBClient.DescribeTable(ReservationsTableCreator.ReservationsTableName);
            } catch (ResourceNotFoundException e)
            {
                string msg = ReservationsTableCreator.ReservationsTableName + " {0} table does not exist. Do not need to remove it.";
                Assert.Fail(msg + e.Message);
            }
        }

        [TestMethod]
        public void TestDataUploader()
        {
            ReservationsDataUploader.Main();
            if (ReservationsDataUploader.numberOfFailures != 0)
            {
                Assert.Fail("Reservations Data Uploader Failures: " + ReservationsDataUploader.numberOfFailures);
            }
        }
    }
}
