package com.amazonaws.lab;
// Copyright 2017 Amazon Web Services, Inc. or its affiliates. All rights reserved.

import static org.junit.Assert.*;

import org.junit.Test;

public class ReservationsDataUploaderTest {

	@Test
	public void test() throws Exception {
		ReservationsDataUploader.main(new String[0]);
		assertEquals(1000, ReservationsDataUploader.numItemsAdded, 0);
	}
}
