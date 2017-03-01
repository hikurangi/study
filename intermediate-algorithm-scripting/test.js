import test from 'ava'
import sumAll from './01-sum-all-numbers.js'
import diffArray from './02-diff-two-arrays.js'

test('#1 - Sum All Numbers: sumAll([1, 4]) returns a number', async t => {
  const sumAllPromise = Promise.resolve('01 - Sum All Numbers')
  t.is(await isNaN(sumAll([1, 4])), false ) // testing that the result is not... not a number.
})

test('#1 - Sum All Numbers: sumAll([1, 4]) returns 10', async t => {
  const sumAllTitle = Promise.resolve('01 - Sum All Numbers')
  t.is(await sumAll([1, 4]), 10 )
})

test('#1 - Sum All Numbers: sumAll([4, 1]) returns 10', async t => {
  const sumAllTitle = Promise.resolve('01 - Sum All Numbers')
  t.is(await sumAll([4, 1]), 10 )
})

test('#1 - Sum All Numbers: sumAll([5, 10]) returns 45', async t => {
  const sumAllTitle = Promise.resolve('01 - Sum All Numbers')
  t.is(await sumAll([5, 10]), 45 )
})

test('#1 - Sum All Numbers: sumAll([10, 5]) returns 45', async t => {
  const sumAllTitle = Promise.resolve('01 - Sum All Numbers')
  t.is(await sumAll([10, 5]), 45 )
})

test('#2 - Diff Two Arrays: diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])) returns [4]', async t => {
  const diffArrayPromise = Promise.resolve('#2 - Diff Two Arrays')
  t.is(await diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]), [4,] )
})
