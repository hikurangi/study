package com.amazonaws.lab;
// Copyright 2017 Amazon Web Services, Inc. or its affiliates. All rights reserved.

import static org.junit.Assert.*;

import org.junit.Test;

public class CustomerReportLinkerTest {

	@Test
	public void test() throws Exception {
		CustomerReportLinker.main(new String[0]);
		for (int i = 1; i < 4; i++) {
			// Checks if CustomerReportUrl attribute is present.
			boolean customerReportUrlAttrPresent = CustomerReportLinker.dynamoDB
					.getTable(CustomerReportLinker.RESERVATIONS_TABLE_NAME).getItem("CustomerId", ("" + i))
					.isPresent("CustomerReportUrl");
			System.out.printf("Test - CustomerId: %s, customerReportUrlAttrPresent: %b %n", i,
					customerReportUrlAttrPresent);
			assertTrue(customerReportUrlAttrPresent);
		}
	}
}
