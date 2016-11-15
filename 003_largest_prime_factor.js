// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

// find primes up to limit n

largestPrimeFactor = function (n) {

  let primes = []

  for ( let i = 2; i < n; i++) {

    // push i to arr iff i is prime
    for ( let j = 2; j <= Math.sqrt(i); j++ ) {

      if ( i % j === 0 ) {
        break
      } else {
        primes.push(i)
      }
    }
  }
  console.log(primes[primes.length - 1])
}

largestPrimeFactor(1000000)
