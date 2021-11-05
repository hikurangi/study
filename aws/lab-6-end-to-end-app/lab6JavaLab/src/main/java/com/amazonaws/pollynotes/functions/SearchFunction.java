package com.amazonaws.pollynotes.functions;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.amazonaws.pollynotes.pojo.Note;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBQueryExpression;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

public class SearchFunction implements RequestHandler<Note, List<Note>> {

	/**
	 * PollyNotes-SearchFunction
	 * 
     * This lambda function is integrated with the following API methods:
     * /notes/search/GET
     * 
     * This function does the following:
     * 1. Takes a JSON payload from API gateway and converts it into a Note POJO {@link com.amazonaws.pollynotes.pojo.Note}
     * 2. Queries DynamoDB using the QueryAsync feature. It will use the userId for the Partition Key, but a Filter will need
     *    to be applied to do the search based on the note text.
     * 3. Returns the List of Note found
     *  
     * @param	note 	POJO of Note created from the JSON sent from API GW into Lambda
     * @param	context	Lambda context which can be used for logging
     * @return			A List of Note containing all of the items for the userId containing the note  text in DynamoDB
	 */
	@Override
	public List<Note> handleRequest(Note note, Context context) {
		// The note object contains the userId and a partial note sent from API GW in the /notes/search/GET
        // {
        //   "userId": "...",
        //   "note": "..."
        // }
		
		// Create the DynamoDB client and mapper

		
		// Create the Expression Attribute Value HashMap for the value of the note text to search
		//  sent in the note in the request

		
		// Create the Query Expression with the Hash/Partition Key set to the one set in the note in the request
		//  and with the filter expression set to the value of the note sent in the request

		
		// Query DynamoDB based on the Query Expression and return the results
		
		
		// Return a List of Note (currently returning an empty list)
		return new ArrayList<Note>();
	}
}
