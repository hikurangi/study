const reduce = (arr, fn, initial) => {
  // SOLUTION GOES HERE

  if (!arr.length) {
    return initial
  }

  // {fn: fn.toString()}

  let head = arr[0]
  let tail = arr.slice(1)
  let next = fn(initial, head)

  return reduce(tail, fn, next)

}

module.exports = reduce

// console.log({fn: fn.toString(), this:this, fnCall: fn(initial, arr[0])})
