// My Answer
const arrayMap = (arr, fn) => arr.reduce(
  (acc, item) => [...acc, fn(item)],
  []
)

module.exports = arrayMap

// Model Answer
const arrayMap = (arr, fn, thisArg) => {
  return arr.reduce(function (acc, item, index, arr) {
    acc.push(fn.call(thisArg, item, index, arr))
    return acc
  }, [])
}
