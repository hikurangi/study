// Data Structures: Create a Stack Class

// In the last section, we talked about what a stack is and how we can use an array to represent a stack. In this section, we will be creating our own stack class.
// Although you can use arrays to create stacks, sometimes it is best to limit the amount of control we have with our stacks.
// Apart from the push and pop method, stacks have other useful methods. Let's add a peek, isEmpty, and clear method to our stack class.

// Instructions

// Write a push method that pushes an element to the top of the stack, a pop method that removes the element on the top of the stack, a peek method that looks at the first element in the stack, an isEmpty method that checks if the stack is empty, and a clear method that removes all elements from the stack.
// Normally stacks don't have this, but we've added a print helper method that console logs the collection.

function Stack() { 
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line
  this.isEmpty = function() {
    return collection.length === 0
  }
  
  this.peek = function() {
    return collection[0]
  }

  this.push = function(newItem) {
    collection[collection.length] = newItem
  }

  this.pop = function() {
    const lastItem = collection[collection.length - 1]

    if (!this.isEmpty()) {
      delete collection[collection.length - 1] // are these two different?
    }

    return lastItem
  }

  this.clear = function () {
    collection = []
  }
   // Only change code above this line
}

export default Stack

