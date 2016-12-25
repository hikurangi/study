// Wherefore art thou

// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// Here are some helpful links:

// Global Object
// Object.prototype.hasOwnProperty()
// Object.keys()

// My solution, with heaps of help from the top answer at: http://stackoverflow.com/questions/23349830/javascript-returning-objects-based-on-multiple-properties

// Please excuse the excessive pseudocode/comments!

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
        // if both the keys on the target and source object AND the values of those respective keys on the target and source objects match.....
        if ( ref === prop && item[prop] === source[ref] ) {
          // passes the first and second tests but not 3 and 4
          // console.log({propInComparison: prop, refInComparison: ref});
          // ...increment samePropCount: add another match
          samePropCount++
        }
      }
    }
    // if there are as many matches in the target object as there are query keys in the source object....
    if (samePropCount === sourceKeys.length) {
      // ...then we have a match!
      match = true
    }
    // ....and if there's a match, push it to the temporary storage array (arr) to be returned outside the loop after the whole comparison is done
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
