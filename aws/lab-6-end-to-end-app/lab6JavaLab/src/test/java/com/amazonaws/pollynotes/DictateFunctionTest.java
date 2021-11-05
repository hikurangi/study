package com.amazonaws.pollynotes;

import org.junit.Assert;
import org.junit.Test;

import com.amazonaws.pollynotes.solution.CreateUpdateFunctionSolution;
import com.amazonaws.pollynotes.functions.DictateFunction;
import com.amazonaws.pollynotes.pojo.DictateRequest;
import com.amazonaws.pollynotes.pojo.Note;
import com.amazonaws.services.lambda.runtime.Context;

public class DictateFunctionTest {

	// Input data for the Dictate function
	private DictateRequest createDictateInput() {
		DictateRequest request = new DictateRequest();
		Note note = new Note();
		note.setUserId("testuser");
		note.setNoteId("001");
		request.setVoiceId("Russell");
		request.setNote(note);
		return request;
	}
	
	// Input data for the CreateUpdate function
	private Note createCreateInput() {
		Note note = new Note();
		note.setUserId("testuser");
		note.setNoteId("001");
		note.setNote("This is a test");
		return note;
	}

	@Test
	public void testDictateFunctionTest() {
		// Create a Lambda fake context
		Context ctx = new TestContext();
		
		// Create the note in DynamoDB first
		CreateUpdateFunctionSolution createHandler = new CreateUpdateFunctionSolution();
		createHandler.handleRequest(createCreateInput(), ctx);
		
		// Execute the DictateFunction
		DictateFunction dictateHandler = new DictateFunction();
		String output = dictateHandler.handleRequest(createDictateInput(), ctx);
		
		// Test to see if the URL starts with https://
		Assert.assertTrue(output.startsWith("https://"));
	}
}
