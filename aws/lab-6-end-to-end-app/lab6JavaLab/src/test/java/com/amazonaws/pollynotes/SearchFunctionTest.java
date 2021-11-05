package com.amazonaws.pollynotes;

import java.util.List;

import org.junit.Assert;
import org.junit.Test;

import com.amazonaws.pollynotes.solution.CreateUpdateFunctionSolution;
import com.amazonaws.pollynotes.functions.SearchFunction;
import com.amazonaws.pollynotes.pojo.Note;
import com.amazonaws.services.lambda.runtime.Context;

public class SearchFunctionTest {
	
	// Input data for the Search function
	private Note createSearchInput() {
		Note note = new Note();
		note.setUserId("testuser");
		note.setNote("test");
		return note;
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
	public void testSearchFunctionTest() {
		// Create a Lambda fake context
		Context ctx = new TestContext();
		
		// Create the note in DynamoDB first
		CreateUpdateFunctionSolution createHandler = new CreateUpdateFunctionSolution();
		createHandler.handleRequest(createCreateInput(), ctx);
		
		// Execute the SearchFunction
		SearchFunction searchHandler = new SearchFunction();
		List<Note> output = searchHandler.handleRequest(createSearchInput(), ctx);
		
		// Test to see if the output is empty
		Assert.assertFalse(output.isEmpty());
	}
}
