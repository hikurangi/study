// 1.10 Chunky Monkey

// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
//
// Here are some helpful links:
//
// Array.prototype.push()
// Array.prototype.slice()

const chunkArrayInGroups = (arr, size) => {
  let newArr = []
  while (newArr.length <= Math.floor(arr.length / size)) {
    newArr.push(arr.slice(size*(i-1), size*i))
    i++
  }
  // Break it up.
  return arr;
}

module.exports = chunkArrayInGroups
