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

// My first answer

function sumAll(arr) {
  const sorted = arr.sort((a, b) => a - b)
  let total = 0
  for ( let i = sorted[0]; i <= sorted[1]; i++ ) {
    total += i
  }
  return total
}

// function sumAll(arr) {
//   let smallest = Math.min(...arr)
//   let biggest = Math.max(...arr)
// }

// sumAll([1, 4]) // // => a number.
// sumAll([1, 4]) // // => 10.
// sumAll([4, 1]) // // => 10.
// sumAll([5, 10]) // // => 45.
// sumAll([10, 5]) // // => 45.

export default sumAll
