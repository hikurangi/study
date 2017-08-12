// 1.14 - Seek and Destroy

// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
//
// Here are some helpful links:
//
// Arguments object
// Array.prototype.filter()

// Minimal ES6 - using the suggested ES5 / prior methods from FCC
const destroyer = function(arr) { // arrow functions do not bind an arguments object!
  // Remove all the values
  let args = Array.prototype.slice.call(arguments)
  let initial = args[0]
  let targets = args.slice(1)
  console.log({initial, targets});
  return initial.filter(initialItem => targets.forEach(target => target != initialItem))

}

// The ES6 way

// const destroyer = arr => { // doing it in an ES6-friendly way.
//   let initial = (...arr) => arr[0]
//   let targets = (...arr) => arr.slice(1)
//   console.log({initial, targets});
//   return initial.filter(initialItem => targets.forEach(target => target != initialItem))
// }

module.exports = destroyer
