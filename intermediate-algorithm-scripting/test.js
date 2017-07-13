import test from 'ava'
import sumAll from './01-sum-all-numbers.js'
import diffArray from './02-diff-two-arrays.js'

// 1. Sum All Numbers

test('1.1 - Sum All Numbers: sumAll([1, 4]) returns a number', t => {
  const actual = !isNaN(sumAll([1, 4]))
  const expected = true
  t.is(actual, expected)
})

test('1.2 - Sum All Numbers: sumAll([1, 4]) returns 10', t => {
  const actual = sumAll([1, 4])
  const expected = 10
  t.is(actual, expected)
})

test('1.3 - Sum All Numbers: sumAll([4, 1]) returns 10', t => {
  const actual = sumAll([4, 1])
  const expected = 10
  t.is(actual, expected)
})

test('1.4 - Sum All Numbers: sumAll([5, 10]) returns 45', t => {
  const actual = sumAll([5, 10])
  const expected = 45
  t.is(actual, expected)
})

test('1.5 - Sum All Numbers: sumAll([10, 5]) returns 45', async t => {
  const actual = sumAll([10, 5])
  const expected = 45
  t.is(actual, expected)
})

// 2. Diff Two Arrays

test('2.1 - Diff Two Arrays: diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) returns [4]', t => {
  const actual = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])
  const expected = [4]
  t.deepEqual(actual, expected)
})

test('2.2 - Diff Two Arrays: diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) returns ["pink wool"]', t => {
  const actual =  diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])
  const expected = ["pink wool"]
  t.deepEqual(actual, expected)
})

test('2.3 - Diff Two Arrays: diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) returns ["diorite", "pink wool"]', t => {
  const actual =  diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])
  const expected = ["diorite", "pink wool"]
  t.deepEqual(actual, expected)
})

test('2.4 - Diff Two Arrays: diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]) returns ["diorite", "pink wool"]', t => {
  const actual =  diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])
  const expected = []
  t.deepEqual(actual, expected)
})

test('2.5 - Diff Two Arrays: diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]) returns ["piglet", 4]', t => {
  const actual =  diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])
  const expected = ["piglet", 4]
  t.deepEqual(actual, expected)
})

test('2.6 - Diff Two Arrays: diffArray([], ["snuffleupagus", "cookie monster", "elmo"]) returns ["diorite", "pink wool"]', t => {
  const actual =  diffArray([], ["snuffleupagus", "cookie monster", "elmo"])
  const expected = ["snuffleupagus", "cookie monster", "elmo"]
  t.deepEqual(actual, expected)
})

test('2.7 - Diff Two Arrays: diffArray([1, "calf", 3, "piglet"], [7, "filly"]) returns [1, "calf", 3, "piglet", 7, "filly"]', t => {
  const actual =  diffArray([1, "calf", 3, "piglet"], [7, "filly"])
  const expected = [1, "calf", 3, "piglet", 7, "filly"]
  t.deepEqual(actual, expected)
})

// 3. Roman Numeral Converter
// test('3.1 - Diff Two Arrays: diffArray([1, "calf", 3, "piglet"], [7, "filly"]) returns [1, "calf", 3, "piglet", 7, "filly"]', t => {
//   const actual =  diffArray([1, "calf", 3, "piglet"], [7, "filly"])
//   const expected = [1, "calf", 3, "piglet", 7, "filly"]
//   t.deepEqual(actual, expected)
// })

test('6.0 - Pig Latin: translatePigLatin("consonant") returns "onsonantcay"', async t => {
  const actual = translatePigLatin("consonant")
  const expected = "onsonantcay"
  t.is(actual, expected)
})

test('6.1 - Pig Latin: translatePigLatin("california") returns "aliforniacay"', async t => {
  const actual = translatePigLatin("california")
  const expected = "aliforniacay"
  t.is(actual, expected)
})

test('6.2 - Pig Latin: translatePigLatin("paragraphs") returns "aragraphspay"', async t => {
  const actual = translatePigLatin("paragraphs")
  const expected = "aragraphspay"
  t.is(actual, expected)
})

test('6.3 - Pig Latin: translatePigLatin("glove") returns "oveglay"', async t => {
  const actual = translatePigLatin("glove")
  const expected = "oveglay"
  t.is(actual, expected)
})

test('6.4 - Pig Latin: translatePigLatin("algorithm") returns "algorithmway"', async t => {
  const actual = translatePigLatin("algorithm")
  const expected = "algorithmway"
  t.is(actual, expected)
})

test('6.5 - Pig Latin: translatePigLatin("eight") returns "eightway"', async t => {
  const actual = translatePigLatin("eight")
  const expected = "eightway"
  t.is(actual, expected)
})
