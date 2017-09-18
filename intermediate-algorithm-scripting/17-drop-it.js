// Drop it

// Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
//
// The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.
//
// Return the rest of the array, otherwise return an empty array.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
// Here are some helpful links:
//
// Arguments object
// Array.prototype.shift()
// Array.prototype.slice()

// Recursive implementation
// const dropElements = (arr,func) => !arr.length || func(arr[0]) ? arr : dropElements(arr.slice(1), func)

// // Loop implementation
const dropElements = (arr, func) => {
  let counter = 0
  while (counter < arr.length) {
    if (func(arr[counter])) { return arr.slice(counter) }
    counter++
  }
}

module.exports = dropElements
