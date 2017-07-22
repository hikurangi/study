import reverseString from './01-reverse-a-string.js';

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
