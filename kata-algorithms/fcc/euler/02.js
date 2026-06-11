const fiboEvenSum = number => {
    const fibs = [1, 2]
    let position = 2
    do {
        const last = fibs[position - 1]
        const secondToLast = fibs[position - 2]
        fibs.push(last + secondToLast)
        const lastItem = fibs[fibs.length - 1]
        position++
        // console.log({ position, last, secondToLast, lastItem });
    } while (position <= number)
    return fibs.reduce((a, b) => b % 2 === 0 ? a + b : a, 0)
}

export default fiboEvenSum