// a functional recursive solution
// const multiplesOf3and5 = (number, acc) => { // works for small numbers but busts call stack on big implementations
//     if (number === 0) return acc // base case
//     let updatedAccumulator = number % 3 === 0 || number % 5 === 0
//         ? acc + number
//         : acc
//     if (acc === undefined) updatedAccumulator = 0 // first call
//     return multiplesOf3and5(--number, updatedAccumulator)
// }

const multiplesOf3and5 = number => {
    const multiples = []
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            multiples.push(i)
        }
    }
    return multiples.reduce((a, b) => a + b, 0)
}

export default multiplesOf3and5