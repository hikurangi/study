import test from 'ava'
import sumAll from './intermediate-algorithm-scripting/01-sum-all-numbers.js'

test('01 - Sum All Numbers', async t => {
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
