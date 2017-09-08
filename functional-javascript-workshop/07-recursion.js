const reduce = (arr, fn, initial) => {
  // SOLUTION GOES HERE

  if (!arr.length) {
    return initial
  }

  return reduce(arr.slice(1), fn, fn(initial, arr[0]))

}

module.exports = reduce

// console.log({fn: fn.toString(), this:this, fnCall: fn(initial, arr[0])})

// Model Answer

// function reduce(arr, fn, initial) {
//   return (function reduceOne(index, value) {
//     if (index > arr.length - 1) return value // end condition
//     return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to ne
// xt step
//   })(0, initial) // IIFE. kick off recursion with initial values
// }
//
// module.exports = reduce
