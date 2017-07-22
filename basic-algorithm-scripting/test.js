// reverseString("Howdy") should become "ydwoH".
// reverseString("Greetings from Earth") should return "htraE morf sgniteerG".

import reverseString from './01-reverse-a-string.js';

test('0.0.0 - Reverse A String: reverseString("hello") should return a string.', () => {
  const actual = typeof reverseString('hello')
  const expected = 'string'
  expect(actual).toBe(expected)
})

test('0.0.1 - Reverse A String: reverseString("hello") should become "olleh"', () => {
  const actual = reverseString('hello')
  const expected = 'olleh'
  expect(actual).toBe(expected)
})
