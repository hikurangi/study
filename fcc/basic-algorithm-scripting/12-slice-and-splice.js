// Basic Algorithm Scripting: Slice and Splice

// You are given two arrays and an index.
// Use the array methods slice and splice to copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

const frankenSplice = (arr1, arr2, n) => {
  const output = arr2.slice() // clone arr2, output is not arr2 in memory
  output.splice(n, 0, ...arr1)  
  return output
}

export default frankenSplice