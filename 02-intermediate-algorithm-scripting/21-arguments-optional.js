// 2.22 - Arguments Optional

// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
//
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
//
// Calling this returned function with a single argument will then return the sum:
//
// var sumTwoAnd = addTogether(2);
//
// sumTwoAnd(3) returns 5.
//
// If either argument isn't a valid number, return undefined.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
// Here are some helpful links:
//
// Closures
// Arguments object

// Slightly ugly ES6-ish solution
const addTogether = (...args) => { // works for any length of array
  if (args.every(value => typeof value === 'number')) { // is every item in args a number?
    if (args.length === 1) {
      return val => typeof val === 'number' ? args[0] + val : undefined
    } else {
      return args.reduce((a, b) => a + b)
    }
  } else {
    return undefined
  }
}

module.exports = addTogether

// const addTogether = (...a) => a.length > 1 ? a.reduce((a, b) => a + b) : b => !isNaN(a) && !isNaN(b) ? a + b : undefined

// Model Answer - Advanced - uses ternaries instead of if/else, makes things succinct but perhaps less readable

// function addTogether() {
//   var args = Array.from(arguments);
//   return args.some(n => typeof n !== 'number') ?
//     undefined:
//     args.length > 1 ?
//       args.reduce((acc, n) => acc += n, 0):
//       (n) => typeof n === "number" ?
//         n + args[0]:
//         undefined;
// }
