// Sum All Numbers In A Range

// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
//
// The lowest number will not always come first.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
// Here are some helpful links:
//
// Math.max()
// Math.min()
// Array.prototype.reduce()

// My first answer - works only for a two-number array

// function sumAll(arr) {
//   let sortedArr = arr.sort(function(a, b) {
//     return a - b
//   })
//   let total = 0
//   for ( let i = sortedArr[0]; i <= sortedArr[1]; i++ ) {
//     total += i
//   }
//   return total
// }

function sumAll(arr) {
  let smallest = Math.min(...arr)
  let biggest = Math.max(...arr)
}

// sumAll([1, 4]) // should return a number.
// sumAll([1, 4]) // should return 10.
// sumAll([4, 1]) // should return 10.
// sumAll([5, 10]) // should return 45.
// sumAll([10, 5]) // should return 45.
