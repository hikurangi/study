import test from 'ava'
import sumAll from './intermediate-algorithm-scripting/01-sum-all-numbers.js'

test('01 - Sum All Numbers', async t => {
  const sumAllTitle = Promise.resolve('01 - Sum All Numbers')
  t.is(await !isNaN(sumAll([1, 4])), !isNaN)
})
