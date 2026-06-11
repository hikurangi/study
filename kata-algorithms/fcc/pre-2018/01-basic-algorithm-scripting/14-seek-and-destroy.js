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
//
// const destroyer = function(arr) {
//   let args = Array.prototype.slice.call(arguments)
//   return args[0].filter(initialItem => !args.slice(1).some(target => target === initialItem))
// }

// The ES6 way

const destroyer = (...args) => args[0].filter(initialItem => !args.slice(1).some(target => target === initialItem))

// Model answer

// function destroyer(arr) {
//   var args = Array.from(arguments).slice(1);
//   return arr.filter(function(val) {
//     return !args.includes(val);
//   });
// }

export default destroyer
