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

// Working recursive implementation - could use refactoring?
const dropElements = (arr,func) => {
  if (!arr.length) {
    return []
  } else if (func(arr[0])) {
    return arr
  } else {
    return dropElements(arr.slice(1), func)
  }
}

// // Recursive implementation - one-liner which only works IF there is definitely a true value in the array.
// const dropElements = (arr, func) => func(arr[0]) ? arr : dropElements(arr.slice(1), func) // SO close


// // Loop implementation
// const dropElements = (arr, func) => {
//   let counter = 0
//   let bool = false
//   while (counter < arr.length) {
//     bool = func(arr[counter])
//     if (bool) { return arr.slice(counter) }
//     counter++
//   }
// }

module.exports = dropElements
