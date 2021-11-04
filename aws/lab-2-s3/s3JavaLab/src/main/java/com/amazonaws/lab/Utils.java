package com.amazonaws.lab;
// Copyright 2017 Amazon Web Services, Inc. or its affiliates. All rights reserved.

import com.amazonaws.regions.Region;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.Bucket;
import com.amazonaws.services.s3.model.DeleteObjectsRequest;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.S3Object;
import java.util.List;

public class Utils {

	public static final String LAB_S3_BUCKET_NAME = "us-west-2-aws-staging";
	public static final String LAB_S3_BUCKET_REGION = "us-west-2";
	public static final String[] LAB_BUCKET_DATA_FILE_KEYS = {
			"awsu-ilt/AWS-100-DEV/v2.2/binaries/input/lab-6-lambda/DrugAdverseEvents_September.txt",
			"awsu-ilt/AWS-100-DEV/v2.2/binaries/input/lab-6-lambda/DrugAdverseEvents_October.txt" };

	public static final String[] STUDENT_BUCKET_DATA_FILE_KEYS = { "DrugAdverseEvents_September.txt",
			"DrugAdverseEvents_October.txt" };

	public static Region getRegion() {
		Region region = Regions.getCurrentRegion();

		// For local testing only
		if (region == null) {
			region = Region.getRegion(Regions.US_WEST_1);
		}

		System.out.printf("getRegion returned: ", region.getName());
		return region;
	}

	// Set up the input and output buckets
	public static void setup(AmazonS3 s3ClientForStudentBuckets, String inputBucketName, String outputBucketName)
			throws Exception {
		setupInputBucket(s3ClientForStudentBuckets, inputBucketName);
		setupOutputBucket(s3ClientForStudentBuckets, outputBucketName);
	}

	// Create the input bucket. Copy the CSV-formatted files from the lab bucket to
	// the student's input bucket.
	private static void setupInputBucket(AmazonS3 s3ClientForStudentBuckets, String inputBucketName) throws Exception {
		S3Object sampleDataObject = null;

		// Create a separate instance of the AmazonS3Client to access the lab bucket.
		AmazonS3 s3ForLabBucket = AmazonS3ClientBuilder.standard().withRegion(LAB_S3_BUCKET_REGION).build();

		// Create the input bucket and copy over the files from the lab bucket
		if (!s3ClientForStudentBuckets.doesBucketExistV2(inputBucketName)) {
			s3ClientForStudentBuckets.createBucket(inputBucketName);
		} else {
			verifyBucketOwnership(s3ClientForStudentBuckets, inputBucketName);
		}

		for (int i = 0; i < LAB_BUCKET_DATA_FILE_KEYS.length; i++) {
			sampleDataObject = s3ForLabBucket.getObject(LAB_S3_BUCKET_NAME, LAB_BUCKET_DATA_FILE_KEYS[i]);
			ObjectMetadata objectMetadata = new ObjectMetadata();
			objectMetadata.setContentLength(sampleDataObject.getObjectMetadata().getContentLength());

			s3ClientForStudentBuckets.putObject(inputBucketName, STUDENT_BUCKET_DATA_FILE_KEYS[i],
					sampleDataObject.getObjectContent(), objectMetadata);
		}
	}

	// Create the output bucket
	// If a bucket with the name already exists, make sure that you have permissions
	// to access the bucket
	private static void setupOutputBucket(AmazonS3 s3ClientForStudentBuckets, String outputBucketName)
			throws Exception {
		if (!s3ClientForStudentBuckets.doesBucketExistV2(outputBucketName)) {
			System.out.println("DataTransformer: Creating output bucket: " + outputBucketName);
			s3ClientForStudentBuckets.createBucket(outputBucketName);
		} else {
			verifyBucketOwnership(s3ClientForStudentBuckets, outputBucketName);
			// Delete objects from previous run of code
			s3ClientForStudentBuckets.deleteObjects(new DeleteObjectsRequest(outputBucketName)
					.withKeys(STUDENT_BUCKET_DATA_FILE_KEYS[0], STUDENT_BUCKET_DATA_FILE_KEYS[1]));
		}
	}

	// Verify that this AWS account is the owner of the bucket
	public static void verifyBucketOwnership(AmazonS3 s3ClientForStudentBuckets, String bucketName) throws Exception {
		boolean ownedByYou = false;
		List<Bucket> buckets = s3ClientForStudentBuckets.listBuckets();
		for (Bucket bucket : buckets) {
			if (bucket.getName().equals(bucketName)) {
				ownedByYou = true;
				break;
			}
		}
		if (!ownedByYou) {
			String msg = String.format(
					"The %s bucket is owned by another account. Specify a unique name for your bucket", bucketName);
			throw new Exception(msg);
		}
	}
}
