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
  const expected = 'true'
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
