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

const smallestCommons = (...arr) => { // destructuring unnecessary
  const gcd = (a, b) => { // find the greatest common divisor using the euclidean algorithm
    if (!b) { return a }
    return gcd(b, a % b)
  }
  const lcm = (a, b) => a * b / gcd(a, b) // find the lowest common multiple
  const range = []
  const args = arr.length === 1 ? arr[0] : arr // the function is passed an array - this accesses the array within the array
  if ((args.length === 2) && (args[0] - args[1] !== -1) && (args[0] - args[1] !== 1)) { // check if array has 1) length 2 and 2) the values are not to each other
    const smallest = args[0] < args[1] ? args[0] : args[1]
    const largest = args[1] > args[0] ? args[1] : args[0]
    for (let i = smallest; i <= largest; i++) { // populate the range of integers
      range.push(i)
    }
  }
  if ((args.length === 2) && (args[0] - args[1] === -1) || (args[0] - args[1] === 1)) {
    return lcm(args[0], args[1])
  } else {
    const nextArr = range.length ? range : args
    const head = nextArr[0]
    return lcm(head, smallestCommons(nextArr.slice(1)))
  }
}

module.exports = smallestCommons
