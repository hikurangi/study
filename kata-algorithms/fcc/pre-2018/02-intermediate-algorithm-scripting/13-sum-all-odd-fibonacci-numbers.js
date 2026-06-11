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
  return fib.reduce((a, n) => n % 2 !== 0 && n <= num ? a + n : a)
}

export default sumFibs

// Model Answers

// Basic Code Solution - super clean

// function sumFibs(num) {
//     var prevNumber = 0;
//     var currNumber = 1;
//     var result = 0;
//     while (currNumber <= num) {
//         if (currNumber % 2 !== 0) {
//             result += currNumber;
//         }
//
//         currNumber += prevNumber;
//         prevNumber = currNumber - prevNumber;
//     }
//
//     return result;
// }

// Intermediate Code Solution

// function sumFibs(num) {
//   // create an array of fib numbers till num
//   var arrFib = [1];
//   for (var i = 1; i <=num;) {
//       arrFib.push(i);
//       i = arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2];
//   }
//
//   // return the sum of odd numbers from the array
//   var res = arrFib.reduce(function(prev, curr) {
//       if (curr%2 !== 0) return prev + curr;
//       else return prev;
//     });
//
//   return res;
// }
