package com.amazonaws.lab;
// Copyright 2017 Amazon Web Services, Inc. or its affiliates. All rights reserved.

import java.io.File;
import java.net.URL;

import com.amazonaws.HttpMethod;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.GetObjectRequest;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.PutObjectResult;
import com.amazonaws.services.s3.model.S3Object;

public class Solution {
	public static AmazonS3 createS3Client() {
		System.out.printf(
				"\nRUNNING SOLUTION CODE: %s! Follow the steps in the lab guide to replace this method with your own implementation.\n",
				"createS3Client");

		AmazonS3 s3client = AmazonS3ClientBuilder.standard().build();

		return s3client;
	}

	public static S3Object getObject(AmazonS3 s3Client, String bucketName, String fileKey) {
		System.out.printf(
				"\nRUNNING SOLUTION CODE: %s! Follow the steps in the lab guide to replace this method with your own implementation.\n",
				"getObject");

		S3Object s3Object = s3Client.getObject(new GetObjectRequest(bucketName, fileKey));
		return s3Object;
	}

	public static void putObjectBasic(AmazonS3 s3Client, String bucketName, String fileKey, File transformedFile) {
		System.out.printf(
				"\nRUNNING SOLUTION CODE: %s! Follow the steps in the lab guide to replace this method with your own implementation.\n",
				"putObjectBasic");

		s3Client.putObject(bucketName, fileKey, transformedFile);
	}

	public static URL generatePresignedUrl(AmazonS3 s3Client, String bucketName, String objectKey) {
		System.out.printf(
				"\nRUNNING SOLUTION CODE: %s! Follow the steps in the lab guide to replace this method with your own implementation.\n",
				"generatePresignedUrl");

		URL url = null;

		java.util.Date expiration = new java.util.Date();
		long msec = expiration.getTime();
		msec += 1000 * 60 * 15; // 15 Minutes
		expiration.setTime(msec);

		url = s3Client.generatePresignedUrl(bucketName, objectKey, expiration, HttpMethod.GET);

		return url;
	}

	public static PutObjectResult putObjectEnhanced(AmazonS3 s3Client, String bucketName, String fileKey,
			File transformedFile) {
		System.out.printf(
				"\nRUNNING SOLUTION CODE: %s! Follow the steps in the lab guide to replace this method with your own implementation.\n",
				"putObjectEnhanced");

		ObjectMetadata objectMetadata = new ObjectMetadata();
		// Request server-side encryption
		objectMetadata.setSSEAlgorithm(ObjectMetadata.AES_256_SERVER_SIDE_ENCRYPTION);

		// Add user metadata "contact", "John Doe"
		objectMetadata.addUserMetadata("contact", "John Doe");

		PutObjectRequest putRequest = new PutObjectRequest(bucketName, fileKey, transformedFile);
		putRequest.setMetadata(objectMetadata);

		// Uploads object
		PutObjectResult response = s3Client.putObject(putRequest);

		return response;
	}
}
