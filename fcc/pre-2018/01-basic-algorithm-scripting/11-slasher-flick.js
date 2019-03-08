// 1.11 - Slasher Flick

// Return the remaining elements of an array after chopping off n elements from the head.
//
// The head means the beginning of the array, or the zeroth index.
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
//
// Here are some helpful links:
//
// Array.prototype.slice()
// Array.prototype.splice()

const slasher = (arr, howMany) => howMany.length >= arr.length ? [] : arr.slice(howMany)

export default slasher

// Model answer... slightly embarrassing

// const slasher = (arr, howMany) => arr.slice(howMany)
