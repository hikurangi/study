package com.amazonaws.pollynotes.functions;

import com.amazonaws.pollynotes.pojo.Note;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

public class CreateUpdateFunction implements RequestHandler<Note, String> {

	/**
	 * PollyNotes-CreateUpdateFunction
     * 
     * This lambda function is integrated with the following API methods:
     * /notes/POST
     * 
     * This function does the following:
     * 1. Takes a JSON payload from API gateway and converts it into a Note POJO {@link com.amazonaws.pollynotes.pojo.Note}
     * 2. Creates or Updates the DynamoDB item based on the Note
     * 3. Returns the noteId
     * 
     * @param	note	POJO of Note created from the JSON sent from API GW into Lambda.
     * @param	context	Lambda context which can be used for logging
     * @return			The noteId of the note created or updated
     */
	@Override
	public String handleRequest(Note note, Context context) {
		// The note object contains a full Note with all parameters set from the API call /notes/POST
        // {
        //   "userId": "...",
        //   "noteId": "...",
        //   "note": "..."
        // }
		
		context.getLogger().log("Initiating PollyNotes-CreateUpdateFunction...");
		
		// Create the DynamoDB client and mapper


		// Save the note sent in the request in DynamoDB

		
		// Return the noteId (currently returning an empty string)
		return "";

	}
}