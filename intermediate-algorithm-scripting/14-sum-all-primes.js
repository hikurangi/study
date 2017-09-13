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

const sumPrimes = num => {
  const primes = []
  // const isPrime = (value) => num % value === 0 ? false : true // uses side effects, not ideal functional programming. naughty boy.
  // filter with isPrime
  for (let i = 0; i < num; i++) {
    primes.push(i)
  }
  // const filtered = primes.filter(isPrime)
  // const reduced = filtered.reduce((a, b) => a + b)
  // console.log({primes, num, filtered, reduced});
  // return primes
  //   .filter(isPrime)
  //   .reduce((a, b) => a + b)
  // return reduced
}

module.exports = sumPrimes
