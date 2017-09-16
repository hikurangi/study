// 2.15 - Smallest Common Multiple

// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
//
// The range will be an array of two numbers that will not necessarily be in numerical order.
//
// e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
// Here are some helpful links:
//
// Smallest Common Multiple

const smallestCommons = arr => {
  const range = []
  for (let i = arr[0] < arr[1] ? arr[0] : arr[1]; i = arr[1] > arr[0] ? arr[1] : arr[0]; i++) { // populate the range of integers
    range.push(i)
  }
  console.log({range});

}

module.exports = smallestCommons
