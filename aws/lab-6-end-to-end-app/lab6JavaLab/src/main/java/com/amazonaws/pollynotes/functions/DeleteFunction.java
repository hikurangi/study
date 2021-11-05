package com.amazonaws.pollynotes.functions;

import com.amazonaws.pollynotes.pojo.Note;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

public class DeleteFunction implements RequestHandler<Note, String> {

	/**
	 * PollyNotes-DeleteFunction
     * 
     * This lambda function is integrated with the following API methods:
     * /notes/{id}/DELETE
     * 
     * This function does the following:
     * 
     * 1. Takes a JSON payload from API gateway and converts it into a Note POJO {@link com.amazonaws.pollynotes.pojo.Note}
     * 2. Deletes the DynamoDB item based on the Note received using the userId and noteId
     * 3. Returns the noteId
     * 
     * @param	note	POJO of Note created from the JSON sent from API GW into Lambda.
     * @param	context	Lambda context which can be used for logging
     * @return			The noteId of the note created or updated
	 */
	@Override
	public String handleRequest(Note note, Context context) {
		// The note object contains the userId and noteId sent from API GW in the /notes/{id}/DELETE
        // {
        //   "userId": "...",
        //   "noteId": "..."
        // }
		
		context.getLogger().log("Initiating PollyNotes-DeleteFunction...");
		
		// Create the DynamoDB client and mapper


		// Delete the note sent in the request in DynamoDB


		// Return the noteId (currently returning an empty string)
		return "";
	}

}