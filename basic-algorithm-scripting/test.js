// 1.1 - Reverse a String

import reverseString from './01-reverse-a-string';

test('1.1.0 - Reverse A String: reverseString("hello") should return a string.', () => {
  const actual = reverseString('hello')
  const expected = 'string'
  expect(typeof actual).toBe(expected)
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

// 1.4 - Find the Longest Word in a String
import findLongestWord from './04-find-the-longest-word'

test('1.4.0 - Find the Longest Word in a String: findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.', () => {
  const actual = !isNaN(findLongestWord("The quick brown fox jumped over the lazy dog"))
  const expected = true
  expect(actual).toBe(expected)
})

test('1.4.1 - Find the Longest Word in a String: findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.', () => {
  const actual = findLongestWord("The quick brown fox jumped over the lazy dog")
  const expected = 6
  expect(actual).toBe(expected)
})

test('1.4.2 - Find the Longest Word in a String: findLongestWord("May the force be with you") should return 5.', () => {
  const actual = findLongestWord("May the force be with you")
  const expected = 5
  expect(actual).toBe(expected)
})

test('1.4.3 - Find the Longest Word in a String: findLongestWord("Google do a barrel roll") should return 6.', () => {
  const actual = findLongestWord("Google do a barrel roll")
  const expected = 6
  expect(actual).toBe(expected)
})

test('1.4.4 - Find the Longest Word in a String: findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.', () => {
  const actual = findLongestWord("What is the average airspeed velocity of an unladen swallow")
  const expected = 8
  expect(actual).toBe(expected)
})

test('1.4.5 - Find the Longest Word in a String: findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.', () => {
  const actual = findLongestWord("What if we try a super-long word such as otorhinolaryngology")
  const expected = 19
  expect(actual).toBe(expected)
})

// 1.5 - Title Case A Sentence
import titleCase from './05-title-case-a-sentence'

test('1.5.0 - Title Case A Sentence: titleCase("I\'m a little tea pot") should return a string.', () => {
  const actual = titleCase("I'm a little tea pot")
  const expected = 'string'
  expect(typeof actual).toBe(expected)
})

test('1.5.1 - Title Case A Sentence: titleCase("I\'m a little tea pot") should return "I\'m A Little Tea Pot".', () => {
  const actual = titleCase("I'm a little tea pot")
  const expected = "I'm A Little Tea Pot"
  expect(actual).toBe(expected)
})

test('1.5.2 - Title Case A Sentence: titleCase("sHoRt AnD sToUt") should return "Short And Stout".', () => {
  const actual = titleCase("sHoRt AnD sToUt")
  const expected = "Short And Stout"
  expect(actual).toBe(expected)
})

test('1.5.3 - Title Case A Sentence: titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".', () => {
  const actual = titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")
  const expected = "Here Is My Handle Here Is My Spout"
  expect(actual).toBe(expected)
})

// 1.6 - Return Largest Numbers In Arrays
import largestOfFour from './06-largest-of-four'

test('1.6.0 - Return Largest Numbers In Arrays: largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.', () => {
  const actual = (largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))
  const expected = true
  expect(actual instanceof Array).toBe(expected)
})

test('1.6.1 - Return Largest Numbers In Arrays: largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27,5,39,1001]', () => {
  const actual = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
  const expected = [5,27,39,1001]
  expect(actual).toEqual(expected)
})

test('1.6.2 - Return Largest Numbers In Arrays: largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000]', () => {
  const actual = largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])
  const expected = [9, 35, 97, 1000000]
  expect(actual).toEqual(expected)
})
