// 1.2 - Factorialize a Number

// Return the factorial of the provided integer.
//
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
//
// Factorials are often represented with the shorthand notation n!
//
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
//
// Here are some helpful links:
//
// Arithmetic Operators

// Loop version (faster)
// const factorialize = num => {
//   let factorial = 1
//   console.log({factorial});
//   for (let i = 0; i < num; i++) {
//     factorial = factorial * i
//     console.log({factorial});
//   }
//   return factorial
// }

// Recursive version (slower, neater code)
const factorialize = num => {
  return num === 0 ? 1 : num * factorialize(num-1)
}

module.exports = factorialize // not recursive
