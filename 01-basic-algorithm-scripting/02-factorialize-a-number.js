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

// Loop version (faster performance)
// const factorialize = num => {
//   let factorial = 1
//   for (let i = num; i > 0; i--) {
//     if (i === 0) {
//       return 1
//     } else {
//       factorial = factorial * i
//     }
//   }
//   return factorial
// }

// Recursive version (slower, neater code)
const factorialize = num => num === 0 ? 1 : num * factorialize(num-1)

module.exports = factorialize
