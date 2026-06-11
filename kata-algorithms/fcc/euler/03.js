// imperative
const largestPrimeFactor = number => {

  // a number's square root is its largest possible factor
  const squareRoot = Math.sqrt(number)
  
  if (isPrime(number)) {
    console.log({number}, '...is prime')
    return number
  }

  for (let i = Math.floor(squareRoot); i > 0; i--) {
    if (isPrime(i) && (number % i === 0)) {
      console.log({i}, '...meets criteria')
      return i
    }
  }
}

export default largestPrimeFactor

function isPrime(number) {
  
  // edge cases
  
  if (number === 1) {
    return false
  }
  
  if (number === 2) {
    return true
  }
  // meat
  for (let i = number; i > 0; i--) {
    console.log({i})
    if (number % i === 0) {
      console.log({number, i}, 'is not prime')
      return false
    }
  }

  return true
}