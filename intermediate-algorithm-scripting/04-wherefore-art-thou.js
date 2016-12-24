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
  const sourceKeys = Object.keys(source)

  // for each item in sourceKeys, iterate through the collection and return matches. this works fine for a single key, but returns false positives in the fourth example.
  const matches = collection.filter( person => {
    // returns any match. we want to return only when all key-value pairs have matches
    return person[sourceKeys[i]] === source[sourceKeys[i]]
    // recursive?
  })

  console.log({matches});
  // Only change code above this line

  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) // => [{ first: "Tybalt", last: "Capulet" }].
whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) // => [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) // => [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) // => [{ "a": 1, "b": 2, "c": 2 }].
