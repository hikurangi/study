import test from 'ava'
import sumAll from './intermediate-algorithm-scripting/01-sum-all-numbers.js'

test('sumAll([1, 4]) returns a number', async t => {
  const sumAllPromise = Promise.resolve('01 - Sum All Numbers')
  t.is(await isNaN(sumAll([1, 4])), false ) // testing that the result is not... not a number.
})

test('01 - Sum All Numbers', async t => {
  const sumAllTitle = Promise.resolve('01 - Sum All Numbers')
  t.is(await sumAll([1, 4]), 10 )
})

test('01 - Sum All Numbers', async t => {
  const sumAllTitle = Promise.resolve('01 - Sum All Numbers')
  t.is(await sumAll([4, 1]), 10 )
})

test('01 - Sum All Numbers', async t => {
  const sumAllTitle = Promise.resolve('01 - Sum All Numbers')
  t.is(await sumAll([5, 10]), 45 )
})

test('01 - Sum All Numbers', async t => {
  const sumAllTitle = Promise.resolve('01 - Sum All Numbers')
  t.is(await sumAll([10, 5]), 45 )
})
