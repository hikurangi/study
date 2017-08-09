const reduce = (arr, fn, initial) => {
  // SOLUTION GOES HERE
  if (initial > arr.length) {
    return
  } else {
    reduce(arr[initial+1], fn, initial+1)
  }
}

module.exports = reduce

// reduce has an accumulator and a
// recursively call the function on ever shrinking slices of arr
