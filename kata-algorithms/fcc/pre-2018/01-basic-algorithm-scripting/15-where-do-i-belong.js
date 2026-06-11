// Where do I belong

// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
//
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
//
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
//
// Here are some helpful links:
//
// Array.prototype.sort()

const getIndexToIns = (arr, num) => {
  let sorted = arr.sort((a, b) => a - b) // array.sort() normally converts array elements to strings and compares strings in Unicode point order. it requires a compare function in order to sort them numerically.
  let targetIndex = sorted.length
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] >= num) {
      targetIndex = i
      return targetIndex
    }
  }
  return targetIndex // in case num is the biggest number
}

// Neat Model Answer / one liner
// const getIndexToIns = (arr, num) => arr.concat(num).sort((a,b) => a-b).indexOf(num)


export default getIndexToIns
