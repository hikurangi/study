package com.amazonaws.lab;
// Copyright 2017 Amazon Web Services, Inc. or its affiliates. All rights reserved.

import com.amazonaws.AmazonClientException;
import com.amazonaws.AmazonServiceException;
import com.amazonaws.services.s3.model.GetObjectRequest;
import com.amazonaws.services.s3.model.ObjectListing;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.services.s3.model.S3ObjectSummary;
import org.junit.Test;

public class DataTransformerTest {

	@Test
	public void testAllFilesExistAndModifiedInOutput() throws Exception {
		DataTransformer.main(new String[0]);

		ObjectListing inputFileObjects = null;

		String fileKey = null;

		S3Object s3OutputObject = null;
		String outputFileStr = null;
		boolean isOutputFileModified = false;
		java.util.Scanner s = null;

		try {
			inputFileObjects = DataTransformer.s3ClientForStudentBuckets.listObjects(DataTransformer.INPUT_BUCKET_NAME);

			do {
				for (S3ObjectSummary objectSummary : inputFileObjects.getObjectSummaries()) {

					fileKey = objectSummary.getKey();
					s3OutputObject = DataTransformer.s3ClientForStudentBuckets
							.getObject(new GetObjectRequest(DataTransformer.OUTPUT_BUCKET_NAME, fileKey));
					s = new java.util.Scanner(s3OutputObject.getObjectContent()).useDelimiter("\\A");
					outputFileStr = s.hasNext() ? s.next() : null;

					if (outputFileStr != null && outputFileStr.contains(DataTransformer.JSON_COMMENT)) {
						isOutputFileModified = true;
					}

					org.junit.Assert.assertTrue("@TransformerTestFailure" + fileKey, isOutputFileModified);
				}
				inputFileObjects = DataTransformer.s3ClientForStudentBuckets.listNextBatchOfObjects(inputFileObjects);
			} while (inputFileObjects.isTruncated());

		} catch (AmazonServiceException ase) {
			System.out.println("@ErrorMessage:    " + ase.getMessage());
			System.out.println("@HTTPStatusCode: " + ase.getStatusCode());
			System.out.println("@AWSErrorCode:   " + ase.getErrorCode());
			System.out.println("@ErrorType:       " + ase.getErrorType());
			System.out.println("@RequestID:       " + ase.getRequestId());
		} catch (AmazonClientException ace) {
			System.out.println("@ErrorMessage: " + ace.getMessage());
		} finally {
			if (s != null) {
				s.close();
			}
		}
	}
}
