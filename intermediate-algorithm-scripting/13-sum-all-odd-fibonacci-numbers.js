// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
//
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
//
// For example, sumFibs(10) // => 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
// Here are some helpful links:
//
// Remainder

const sumFibs = num => {
  let fib = [0, 1]
  let i = 2 // i represents our current array position (once we push the current fibonacci value to the array)
  while (fib[fib.length-1] < num) {
    fib.push(fib[i-2] + fib[i-1])
    i++
  } // create complete fibonacci sequence including one value which equals or exceeds num
  return fib
    .filter(n => (n % 2 !== 0) && (n <= num)) // get rid of even values and any which exceed num
    .reduce((a, b) => a + b, 0)
}

module.exports = sumFibs

// const sumFibs = num => {
//   let fib = [0, 1]
//   for (let i = 2; i <= num; i++) {
//     fib[i] = fib[i-2] + fib[i-1]
//     console.log(fib[i]);
//   }
//   return fib.reduce((a, b) => a % 2 !== 0 ? a + b : b)
// }
