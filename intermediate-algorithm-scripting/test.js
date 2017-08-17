// 2.1 - Sum All Numbers
import sumAll from './01-sum-all-numbers.js';

test('2.1.0 - Sum All Numbers: sumAll([1, 4]) returns a number', () => {
  const actual = !isNaN(sumAll([1, 4]))
  const expected = true
  expect(actual).toBe(expected)
})

test('2.1.1 - Sum All Numbers: sumAll([1, 4]) returns 10', () => {
  const actual = sumAll([1, 4])
  const expected = 10
  expect(actual).toBe(expected)
})

test('2.1.2 - Sum All Numbers: sumAll([4, 1]) returns 10', () => {
  const actual = sumAll([4, 1])
  const expected = 10
  expect(actual).toBe(expected)
})

test('2.1.3 - Sum All Numbers: sumAll([5, 10]) returns 45', () => {
  const actual = sumAll([5, 10])
  const expected = 45
  expect(actual).toBe(expected)
})

test('2.1.4 - Sum All Numbers: sumAll([10, 5]) returns 45', async () => {
  const actual = sumAll([10, 5])
  const expected = 45
  expect(actual).toBe(expected)
})

// 2.2 - Diff Two Arrays
import diffArray from './02-diff-two-arrays.js'

test('2.2.0 - Diff Two Arrays: diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) returns [4]', () => {
  const actual = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])
  const expected = [4]
  expect(actual).toEqual(expect.arrayContaining(expected))
})

test('2.2.1 - Diff Two Arrays: diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) returns ["pink wool"]', () => {
  const actual =  diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])
  const expected = ["pink wool"]
  expect(actual).toEqual(expect.arrayContaining(expected))
})

test('2.2.2 - Diff Two Arrays: diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) returns ["diorite", "pink wool"]', () => {
  const actual =  diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])
  const expected = ["diorite", "pink wool"]
  expect(actual).toEqual(expect.arrayContaining(expected))
})

test('2.2.3 - Diff Two Arrays: diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]) returns ["diorite", "pink wool"]', () => {
  const actual =  diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])
  const expected = []
  expect(actual).toEqual(expect.arrayContaining(expected))
})

test('2.2.4 - Diff Two Arrays: diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]) returns ["piglet", 4]', () => {
  const actual =  diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])
  const expected = ["piglet", 4]
  expect(actual).toEqual(expect.arrayContaining(expected))
})

test('2.2.5 - Diff Two Arrays: diffArray([], ["snuffleupagus", "cookie monster", "elmo"]) returns ["diorite", "pink wool"]', () => {
  const actual =  diffArray([], ["snuffleupagus", "cookie monster", "elmo"])
  const expected = ["snuffleupagus", "cookie monster", "elmo"]
  expect(actual).toEqual(expect.arrayContaining(expected))
})

test('2.2.6 - Diff Two Arrays: diffArray([1, "calf", 3, "piglet"], [7, "filly"]) returns [1, "calf", 3, "piglet", 7, "filly"]', () => {
  const actual =  diffArray([1, "calf", 3, "piglet"], [7, "filly"])
  const expected = [1, "calf", 3, "piglet", 7, "filly"]
  expect(actual).toEqual(expect.arrayContaining(expected))
})

// 2.3 Roman Numeral Converter
// test('3.1 - Diff Two Arrays: diffArray([1, "calf", 3, "piglet"], [7, "filly"]) returns [1, "calf", 3, "piglet", 7, "filly"]', t => {
//   const actual =  diffArray([1, "calf", 3, "piglet"], [7, "filly"])
//   const expected = [1, "calf", 3, "piglet", 7, "filly"]
//   t.deepEqual(actual, expected)
// })

// 2.5 - Search And Replace
import myReplace from './05-search-and-replace'

test('2.5.0 - Search And Replace: myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped") returns "A quick brown fox leaped over the lazy dog"', async () => {
  const actual = myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
  const expected = "A quick brown fox leaped over the lazy dog"
  expect(actual).toBe(expected)
})

test('2.5.1 - Search And Replace: myReplace("Let us go to the store", "jumped", "leaped") returns "Let us go to the mall"', async () => {
  const actual = myReplace("Let us go to the store", "store", "mall")
  const expected = "Let us go to the mall"
  expect(actual).toBe(expected)
})

test('2.5.2 - Search And Replace: myReplace("He is Sleeping on the couch", "Sleeping", "sitting") returns "He is Sitting on the couch"', async () => {
  const actual = myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
  const expected = "He is Sitting on the couch"
  expect(actual).toBe(expected)
})

test('2.5.3 - Search And Replace: myReplace("This has a spellngi error", "spellngi", "spelling") returns "This has a spelling error"', async () => {
  const actual = myReplace("This has a spellngi error", "spellngi", "spelling")
  const expected = "This has a spelling error"
  expect(actual).toBe(expected)
})

test('2.5.4 - Search And Replace: myReplace("His name is Tom", "Tom", "john") returns "His name is John"', async () => {
  const actual = myReplace("His name is Tom", "Tom", "john")
  const expected = "His name is John"
  expect(actual).toBe(expected)
})

test('2.5.4 - Search And Replace: myReplace("Let us get back to more Coding", "Coding", "algorithms") returns "Let us get back to more Algorithms"', async () => {
  const actual = myReplace("Let us get back to more Coding", "Coding", "algorithms")
  const expected = "Let us get back to more Algorithms"
  expect(actual).toBe(expected)
})

// 2.6 - Pig Latin Translator
import translatePigLatin from './06-pig-latin'

test('2.6.0 - Pig Latin: translatePigLatin("consonant") returns "onsonantcay"', async () => {
  const actual = translatePigLatin("consonant")
  const expected = "onsonantcay"
  expect(actual).toBe(expected)
})

test('2.6.1 - Pig Latin: translatePigLatin("california") returns "aliforniacay"', async () => {
  const actual = translatePigLatin("california")
  const expected = "aliforniacay"
  expect(actual).toBe(expected)
})

test('2.6.2 - Pig Latin: translatePigLatin("paragraphs") returns "aragraphspay"', async () => {
  const actual = translatePigLatin("paragraphs")
  const expected = "aragraphspay"
  expect(actual).toBe(expected)
})

test('2.6.3 - Pig Latin: translatePigLatin("glove") returns "oveglay"', async () => {
  const actual = translatePigLatin("glove")
  const expected = "oveglay"
  expect(actual).toBe(expected)
})

test('2.6.4 - Pig Latin: translatePigLatin("algorithm") returns "algorithmway"', async () => {
  const actual = translatePigLatin("algorithm")
  const expected = "algorithmway"
  expect(actual).toBe(expected)
})

test('2.6.5 - Pig Latin: translatePigLatin("eight") returns "eightway"', async () => {
  const actual = translatePigLatin("eight")
  const expected = "eightway"
  expect(actual).toBe(expected)
})

// 2.7 - DNA Pairing
import pairElement from './07-dna-pairing'

test('2.7.0 - DNA Pairing: pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].', () => {
  const actual =  pairElement("ATCGA")
  const expected = [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
  expect(actual).toEqual(expect.arrayContaining(expected))
})

test('2.7.1 - DNA Pairing: pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].', () => {
  const actual =  pairElement("TTGAG")
  const expected = [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
  expect(actual).toEqual(expect.arrayContaining(expected))
})

test('2.7.2 - DNA Pairing: pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].', () => {
  const actual =  pairElement("CTCTA")
  const expected = [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]
  expect(actual).toEqual(expect.arrayContaining(expected))
})

// 2.8 - Missing Letters
import fearNotLetter from './08-missing-letters'

test('2.8.0 - Missing Letters: fearNotLetter("abce") should return "d".', () => {
  const actual =  fearNotLetter("abce")
  const expected = "d"
  expect(actual).toEqual(expected)
})

test('2.8.1 - Missing Letters: fearNotLetter("abcdefghjklmno") should return "i".', () => {
  const actual =  fearNotLetter("abcdefghjklmno")
  const expected = "i"
  expect(actual).toEqual(expected)
})

test('2.8.2 - Missing Letters: fearNotLetter("bcd") should return undefined.', () => {
  const actual =  fearNotLetter("bcd")
  const expected = undefined
  expect(actual).toEqual(expected)
})

test('2.8.3 - Missing Letters: fearNotLetter("yz") should return undefined.', () => {
  const actual =  fearNotLetter("yz")
  const expected = undefined
  expect(actual).toEqual(expected)
})

// 2.9 - Boo who

import booWho from './09-boo-who'

test('2.9.0 - Boo Who: booWho(true) should return true.', () => {
  const actual =  booWho(true)
  const expected = true
  expect(actual).toBe(expected)
})

test('2.9.1 - Boo Who: booWho(false) should return true.', () => {
  const actual =  booWho(false)
  const expected = true
  expect(actual).toBe(expected)
})

test('2.9.2 - Boo Who: booWho([1, 2, 3]) should return false.', () => {
  const actual =  booWho([1, 2, 3])
  const expected = false
  expect(actual).toBe(expected)
})

test('2.9.3 - Boo Who: booWho([].slice) should return false.', () => {
  const actual =  booWho([].slice)
  const expected = false
  expect(actual).toBe(expected)
})

test('2.9.4 - Boo Who: booWho({ "a": 1 }) should return false.', () => {
  const actual =  booWho({ "a": 1 })
  const expected = false
  expect(actual).toBe(expected)
})

test('2.9.5 - Boo Who: booWho(1) should return false.', () => {
  const actual =  booWho(1)
  const expected = false
  expect(actual).toBe(expected)
})

test('2.9.6 - Boo Who: booWho(NaN) should return false.', () => {
  const actual =  booWho(NaN)
  const expected = false
  expect(actual).toBe(expected)
})

test('2.9.7 - Boo Who: booWho("a") should return false.', () => {
  const actual =  booWho("a")
  const expected = false
  expect(actual).toBe(expected)
})

test('2.9.8 - Boo Who: booWho("true") should return false.', () => {
  const actual =  booWho("true")
  const expected = false
  expect(actual).toBe(expected)
})

test('2.9.9 - Boo Who: booWho("false") should return false.', () => {
  const actual =  booWho("false")
  const expected = false
  expect(actual).toBe(expected)
})
