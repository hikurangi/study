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

  for (let i = 0; i < num; i++) {
    primes.push(i)
  }

  const filtered = primes.filter(value => {
    let start = 2
    while (start <= Math.sqrt(value)) {
      if (value % start++ < 1) return false
    }
    return value > 1
  })
  const reduced = filtered.reduce((a, b) => a + b)
  console.log({primes, filtered, num, reduced});
  return reduced
  // return reduced

  // return primes
  //   .filter(isPrime)
  //   .reduce((a, b) => a + b)

  // create array of numbers up to the given value
  // create isPrime function
  // filter the array of numbers up to the given value with isPrime
  // return a reduced version of that array.


}

module.exports = sumPrimes
