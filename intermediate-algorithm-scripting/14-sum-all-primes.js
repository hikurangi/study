// Sum All Primes
// Sum all the prime numbers up to and including the provided number.
//
// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
//
// The provided number may not be a prime.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
// Here are some helpful links:
//
// For Loops
// Array.prototype.push()

// My answer based off research and the Intermediate Code solution
const sumPrimes = num => {
  const isPrime = val => { // return boolean value for primeness of an input number
    let start = 2
    while (start <= Math.sqrt(val)) {
      if (val % start++ < 1) return false
    }
    return val > 1
  }
  if (num === 1) { // Base case
    return 0
  }
  if (isPrime(num)) { // include the prime in the addition
    return num + sumPrimes(num-1)
  }
  if (isPrime(num) === false) { // don't include the non-prime in the addition
    return sumPrimes(num - 1 )
  }
}

// First Attempt

// const sumPrimes = num => {
//
//   const primes = []
//
//   for (let i = 0; i < num; i++) {
//     primes.push(i)
//   }
//
//   return primes
//     .filter(value => {
//       let start = 2
//       while (start <= Math.sqrt(value)) {
//         if (value % start++ < 1) return false
//       }
//       return value > 1
//     })
//     .reduce((a, b) => a + b)
//
//   // // Debuggable version
//
//   // const filtered = primes.filter(value => {
//   //   let start = 2
//   //   while (start <= Math.sqrt(value)) {
//   //     if (value % start++ < 1) return false
//   //   }
//   //   return value > 1
//   // })
//   // const reduced = filtered.reduce((a, b) => a + b)
//   // console.log({primes, filtered, num, reduced});
//   // return reduced
//
// }

module.exports = sumPrimes
