// 1 - Multiples of 3 and 5

import multiplesOf3and5 from './01'

test('Euler - Multiples of 3 and 5: multiplesOf3and5(49) should return 543.', () => {
    const actual = multiplesOf3and5(49)
    const expected = 543
    expect(actual).toBe(expected)
})
test('Euler - Multiples of 3 and 5: multiplesOf3and5(1000) should return 233168.', () => {
    const actual = multiplesOf3and5(1000)
    const expected = 233168
    expect(actual).toBe(expected)
})
test('Euler - Multiples of 3 and 5: multiplesOf3and5(19564) should return 89301183.', () => {
    const actual = multiplesOf3and5(19564)
    const expected = 89301183
    expect(actual).toBe(expected)
})

// 2 - Sum of even Fibonacci numbers up to n

import fiboEvenSum from './02'

test('Euler - Even Fibonacci numbers: fiboEvenSum(10) should return 188.', () => {
    const actual = fiboEvenSum(10)
    const expected = 188
    expect(actual).toBe(expected)
})
test('Euler - Even Fibonacci numbers: fiboEvenSum(23) should return 60696.', () => {
    const actual = fiboEvenSum(23)
    const expected = 60696
    expect(actual).toBe(expected)
})
test('Euler - Even Fibonacci numbers: fiboEvenSum(43) should return 1485607536.', () => {
    const actual = fiboEvenSum(43)
    const expected = 1485607536
    expect(actual).toBe(expected)
})

// 3 - Largest prime factor

import largestPrimeFactor from './03'

test('Euler - Largest prime factor: largestPrimeFactor(2) should return 2.', () => {
    const actual = largestPrimeFactor(2)
    const expected = 2
    expect(actual).toBe(expected)
})
test('Euler - Largest prime factor: largestPrimeFactor(3) should return 3.', () => {
    const actual = largestPrimeFactor(3)
    const expected = 3
    expect(actual).toBe(expected)
})
test('Euler - Largest prime factor: largestPrimeFactor(5) should return 5.', () => {
    const actual = largestPrimeFactor(5)
    const expected = 5
    expect(actual).toBe(expected)
})
test('Euler - Largest prime factor: largestPrimeFactor(7) should return 7.', () => {
    const actual = largestPrimeFactor(7)
    const expected = 7
    expect(actual).toBe(expected)
})
test('Euler - Largest prime factor: largestPrimeFactor(13195) should return 29.', () => {
    const actual = largestPrimeFactor(13195)
    const expected = 29
    expect(actual).toBe(expected)
})
test('Euler - Largest prime factor: largestPrimeFactor(600851475143) should return 6857.', () => {
    const actual = largestPrimeFactor(600851475143)
    const expected = 6857
    expect(actual).toBe(expected)
})