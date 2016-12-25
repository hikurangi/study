// Wherefore art thou

// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// Here are some helpful links:

// Global Object
// Object.prototype.hasOwnProperty()
// Object.keys()

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

  // create an array of the object properties in the source object - we will need its length later
  const sourceKeys = Object.keys(source)

  // iterate through the collection
  for ( let i = 0; i < collection.length; i++) {
    // represent the current item in the array to be selected from (the target array) with the variable item
    let item = collection[i]
    // initialise the match checker variable with a value of false
    let match = false
    // initialise the matching properties variable at zero.
    let samePropCount = 0
    // iterate through the properties in the current item/object from the target array/collection
    for (let prop in item) {
      // console.log({prop});

      // for each property in the target item, iterate through the reference properties in the source array - look for matching properties between the props on the source object
      for (let ref in source) {
        // console.log(ref);
        if ( item[prop] === source[ref] ) {
          // passes the first and second tests but not 3 and 4
          // console.log({propInComparison: prop, refInComparison: ref});
          samePropCount++
        }
      }
    }
    if (samePropCount === sourceKeys.length) {
      match = true
    }
    if (match) {
     arr.push(item)
    }
  }


  console.log({arr});
  // Only change code above this line

  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) // => [{ first: "Tybalt", last: "Capulet" }].
whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) // => [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) // => [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) // => [{ "a": 1, "b": 2, "c": 2 }].
