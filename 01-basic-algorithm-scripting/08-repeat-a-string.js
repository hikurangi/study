// 1.8 - Repeat a string repeat a string

// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
//
// Here are some helpful links:
//
// Global String Object

// // My first answer - basic loop
// const repeatStringNumTimes = (str, num) => {
//   let target = str
//   if (num <= 0) {
//     return ''
//   } else {
//     for (let i = 1; i < num; i++) {
//       target += str
//     }
//     return target
//   }
// }

// // While loop
// const repeatStringNumTimes = (str, num) => {
//   let target = ''
//   while (num > 0) {
//     target += str
//     num--
//   }
//   return target
// }

// // Recursion
// const repeatStringNumTimes = (str, num) => {
//   if ( num <= 0 ) {
//     return ''
//   } else if ( num === 1 ) {
//     return str
//   } else {
//     return str + repeatStringNumTimes(str, num-1)
//   }
// }

// Ideal FCC answer using .repeat() method
const repeatStringNumTimes = (str, num) => num < 0 ? '' : str.repeat(num)

export default repeatStringNumTimes

// next try a recursive method with external tracker variable
