// Copyright 2017 Amazon Web Services, Inc. or its affiliates. All rights reserved.

using Amazon.S3;
using Amazon.S3.Model;
using System;
using System.Diagnostics;

namespace Lab2
{
    class Solution
    {
        public static AmazonS3Client CreateS3Client()
        {
            Debug.WriteLine(String.Format("RUNNING SOLUTION CODE: {0}! Follow the steps in the lab guide to replace this method with your own implementation.\n", "CreateS3Client"));
            AmazonS3Client s3ForStudentBuckets = new AmazonS3Client();
            return s3ForStudentBuckets;
        }

        public static GetObjectResponse GetS3Object(AmazonS3Client s3Client, String bucketName, String fileKey)
        {
            Debug.WriteLine(String.Format("RUNNING SOLUTION CODE: {0}! Follow the steps in the lab guide to replace this method with your own implementation.\n", "GetS3Object"));
            GetObjectRequest request = new GetObjectRequest()
            {
                BucketName = bucketName,
                Key = fileKey,
            };
            GetObjectResponse response = s3Client.GetObject(request);
            return response;
        }

        public static void PutObjectBasic(AmazonS3Client s3ForStudentBuckets, string bucketName, string fileKey, string transformedFile)
        {
            Debug.WriteLine(String.Format("RUNNING SOLUTION CODE: {0}! Follow the steps in the lab guide to replace this method with your own implementation.\n", "PutObjectBasic"));
            PutObjectRequest putRequest = new PutObjectRequest
            {
                BucketName = bucketName,
                Key = fileKey,
                ContentBody = transformedFile,
            };
            s3ForStudentBuckets.PutObject(putRequest);
        }

        public static string GeneratePresignedURL(AmazonS3Client s3ForStudentBuckets, string OutputBucketName, string objectKey)
        {
            Debug.WriteLine(String.Format("RUNNING SOLUTION CODE: {0}! Follow the steps in the lab guide to replace this method with your own implementation.\n", "GeneratePresignedURL"));
            GetPreSignedUrlRequest request = new GetPreSignedUrlRequest
            {
                BucketName = OutputBucketName,
                Key = objectKey,
                Protocol = Protocol.HTTP,
                Verb = HttpVerb.GET,
                Expires = DateTime.Now.AddSeconds(900), // 15 minutes
            };

            return s3ForStudentBuckets.GetPreSignedURL(request);
        }

        public static void PutObjectEnhanced(AmazonS3Client s3ForStudentBuckets, string bucketName, string fileKey, string transformedFile)
        {
            Debug.WriteLine(String.Format("RUNNING SOLUTION CODE: {0}! Follow the steps in the lab guide to replace this method with your own implementation.\n", "PutObjectEnhanced"));
            PutObjectRequest putRequest = new PutObjectRequest
            {
                BucketName = bucketName,
                Key = fileKey,
                ContentBody = transformedFile,
                ServerSideEncryptionMethod = ServerSideEncryptionMethod.AES256,
            };

            putRequest.Metadata.Add("contact", "John Doe");
            s3ForStudentBuckets.PutObject(putRequest);

            GetObjectMetadataRequest encryptionRequest = new GetObjectMetadataRequest()
            {
                BucketName = bucketName,
                Key = fileKey,
            };
            ServerSideEncryptionMethod objectEncryption = s3ForStudentBuckets.GetObjectMetadata(encryptionRequest).ServerSideEncryptionMethod;
            GetObjectMetadataResponse metadataResponse = s3ForStudentBuckets.GetObjectMetadata(encryptionRequest);
            string contactName = metadataResponse.Metadata["x-amz-meta-contact"];
        }
    }
}
