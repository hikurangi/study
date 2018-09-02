// imperative
const largestPrimeFactor = number => {
    console.log(`### ${number} ###`);
    const isPrime = integer => {
        if (integer <= 1) return false
        console.log(`${integer} is not <= 1`);
        if (integer <= 3) return true
        console.log(`${integer} is not <= 3`);
        if (Number.isInteger(Math.sqrt(integer))) return false
        console.log(`sqrt of ${integer} is not a whole number`);
        for (let i = Math.sqrt(integer); i > 3; i--) {
            if (integer % i === 0) {
                console.log('i factor is', { i });
                return false
            }
        }
        // return true
    }
    if (isPrime(number)) return number
    const factors = []
    for (let i = Math.sqrt(number); i > 3; i--) {
        if (number % i === 0) factors.push(number)
    }
    console.log({ factors, number })
    return factors.filter(isPrime)[0]
    // now check if factors are prime, from largest to smallest
}

export default largestPrimeFactor