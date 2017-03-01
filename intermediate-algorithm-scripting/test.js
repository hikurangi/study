import test from 'ava'
import sumAll from './01-sum-all-numbers.js'
import diffArray from './02-diff-two-arrays.js'

test('#1 - Sum All Numbers: sumAll([1, 4]) returns a number', t => {
  const actual = !isNaN(sumAll([1, 4]))
  const expected = true
  t.is(actual, expected)
})

test('#1 - Sum All Numbers: sumAll([1, 4]) returns 10', t => {
  const actual = sumAll([1, 4])
  const expected = 10
  t.is(actual, expected)
})

test('#1 - Sum All Numbers: sumAll([4, 1]) returns 10', t => {
  const actual = sumAll([4, 1])
  const expected = 10
  t.is(actual, expected)
})

test('#1 - Sum All Numbers: sumAll([5, 10]) returns 45', t => {
  const actual = sumAll([5, 10])
  const expected = 45
  t.is(actual, expected)
})

test('#1 - Sum All Numbers: sumAll([10, 5]) returns 45', async t => {
  const actual = sumAll([10, 5])
  const expected = 45
  t.is(actual, expected)
})

test('#2 - Diff Two Arrays: diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) returns [4]', t => {
  const actual = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])
  const expected = [4]
  t.deepEqual(actual, expected)
})

test('#2 - Diff Two Arrays: diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) returns ["pink wool"]', t => {
  const actual =  diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])
  const expected = ["pink wool"]
  t.deepEqual(actual, expected)
})

test('#2 - Diff Two Arrays: diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) returns ["diorite", "pink wool"]', t => {
  const actual =  diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])
  const expected = ["diorite", "pink wool"]
  t.deepEqual(actual, expected)
})

test('#2 - Diff Two Arrays: diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]) returns ["diorite", "pink wool"]', t => {
  const actual =  diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])
  const expected = []
  t.deepEqual(actual, expected)
})

test('#2 - Diff Two Arrays: diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]) returns ["piglet", 4]', t => {
  const actual =  diffArray(1, "calf", 3, "piglet"], [1, "calf", 3, 4])
  const expected = ["piglet", 4]
  t.deepEqual(actual, expected)
})

test('#2 - Diff Two Arrays: diffArray([], ["snuffleupagus", "cookie monster", "elmo"]) returns ["diorite", "pink wool"]', t => {
  const actual =  diffArray([], ["snuffleupagus", "cookie monster", "elmo"])
  const expected = ["snuffleupagus", "cookie monster", "elmo"]
  t.deepEqual(actual, expected)
})

test('#2 - Diff Two Arrays: diffArray([1, "calf", 3, "piglet"], [7, "filly"]) returns [1, "calf", 3, "piglet", 7, "filly"]', t => {
  const actual =  diffArray([1, "calf", 3, "piglet"], [7, "filly"])
  const expected = [1, "calf", 3, "piglet", 7, "filly"]
  t.deepEqual(actual, expected)
})
