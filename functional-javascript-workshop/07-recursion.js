const reduce = (arr, fn, initial) => {
  // SOLUTION GOES HERE
  // how to get index and currentValue
  if (!arr.length) {
    return initial
  }
  
  let head = arr[0]
  let tail = arr.slice(1)
  let next = fn(initial, head)

  return reduce(arr, fn, next)

}

module.exports = reduce

// console.log({fn: fn.toString(), this:this, fnCall: fn(initial, arr[0])})
