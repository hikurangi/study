// 1.1 - Reverse a String

import reverseString from './01-reverse-a-string';

test('1.1.0 - Reverse A String: reverseString("hello") should return a string.', () => {
  const actual = typeof reverseString('hello')
  const expected = 'string'
  expect(actual).toBe(expected)
})

test('1.1.1 - Reverse A String: reverseString("hello") should become "olleh"', () => {
  const actual = reverseString('hello')
  const expected = 'olleh'
  expect(actual).toBe(expected)
})

test('1.1.2 - Reverse A String: reverseString("Howdy") should become "ydwoH"', () => {
  const actual = reverseString('Howdy')
  const expected = 'ydwoH'
  expect(actual).toBe(expected)
})

test('1.1.3 - Reverse A String: reverseString("Greetings from Earth") should become "htraE morf sgniteerG"', () => {
  const actual = reverseString('Greetings from Earth')
  const expected = 'htraE morf sgniteerG'
  expect(actual).toBe(expected)
})

// 1.2 - Factorialize a Number

import factorialize from './02-factorialize-a-number'

test('1.2.0 - Factorialize a Number: factorialize(5) should return a number.', () => {
  const actual = !isNaN(factorialize(5))
  const expected = true
  expect(actual).toBe(expected)
})

test('1.2.1 - Factorialize a Number: factorialize(5) should return 120.', () => {
  const actual = factorialize(5)
  const expected = 120
  expect(actual).toBe(expected)
})

test('1.2.2 - Factorialize a Number: factorialize(10) should return 3628800.', () => {
  const actual = factorialize(10)
  const expected = 3628800
  expect(actual).toBe(expected)
})

test('1.2.3 - Factorialize a Number: factorialize(20) should return 2432902008176640000.', () => {
  const actual = factorialize(20)
  const expected = 2432902008176640000
  expect(actual).toBe(expected)
})

test('1.2.4 - Factorialize a Number: factorialize(0) should return 1.', () => {
  const actual = factorialize(0)
  const expected = 1
  expect(actual).toBe(expected)
})

// 1.3 Check For palindromes

import palindrome from './03-check-for-palindromes'

test('1.3.0 - Check For Palindromes: palindrome("eye") should return a boolean.', () => {
  const actual = palindrome('eye')
  const expected = true || false
  expect(actual).toBe(expected)
})

test('1.3.1 - Check For Palindromes: palindrome("eye") should return true.', () => {
  const actual = palindrome('eye')
  const expected = true
  expect(actual).toBe(expected)
})

test('1.3.2 - Check For Palindromes: palindrome("_eye") should return true.', () => {
  const actual = palindrome('_eye')
  const expected = true
  expect(actual).toBe(expected)
})

test('1.3.3 - Check For Palindromes: palindrome("race car") should return true.', () => {
  const actual = palindrome('race car')
  const expected = true
  expect(actual).toBe(expected)
})


test('1.3.4 - Check For Palindromes: palindrome("not a palindrome") should return false.', () => {
  const actual = palindrome('not a palindrome')
  const expected = false
  expect(actual).toBe(expected)
})

test('1.3.5 - Check For Palindromes: palindrome("not a palindrome") should return false.', () => {
  const actual = palindrome('not a palindrome')
  const expected = false
  expect(actual).toBe(expected)
})

test('1.3.6 - Check For Palindromes: palindrome("A man, a plan, a canal. Panama") should return true.', () => {
  const actual = palindrome('A man, a plan, a canal. Panama')
  const expected = true
  expect(actual).toBe(expected)
})

test('1.3.7 - Check For Palindromes: palindrome("never odd or even") should return true.', () => {
  const actual = palindrome('never odd or even')
  const expected = true
  expect(actual).toBe(expected)
})

test('1.3.8 - Check For Palindromes: palindrome("nope") should return false.', () => {
  const actual = palindrome('nope')
  const expected = false
  expect(actual).toBe(expected)
})

test('1.3.9 - Check For Palindromes: palindrome("almostomla") should return false.', () => {
  const actual = palindrome('almostomla')
  const expected = false
  expect(actual).toBe(expected)
})

test('1.3.10 - Check For Palindromes: palindrome("My age is 0, 0 si ega ym.") should return true.', () => {
  const actual = palindrome('My age is 0, 0 si ega ym.')
  const expected = true
  expect(actual).toBe(expected)
})

test('1.3.11 - Check For Palindromes: palindrome("1 eye for of 1 eye.") should return false.', () => {
  const actual = palindrome('1 eye for of 1 eye.')
  const expected = false
  expect(actual).toBe(expected)
})

test('1.3.12 - Check For Palindromes: palindrome("0_0 (: /-\ :) 0-0") should return true.', () => {
  const actual = palindrome('0_0 (: /-\ :) 0-0')
  const expected = true
  expect(actual).toBe(expected)
})

test('1.3.13 - Check For Palindromes: palindrome("five|\_/|four") should return false.', () => {
  const actual = palindrome('five|\_/|four')
  const expected = false
  expect(actual).toBe(expected)
})
