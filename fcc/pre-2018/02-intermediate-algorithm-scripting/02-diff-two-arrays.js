// Diff Two Arrays

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Here are some helpful links:
//
// Comparison Operators
// Array.prototype.slice()
// Array.prototype.filter()
// Array.prototype.indexOf()
// Array.prototype.concat()

const diffArray = (arr1, arr2) => {
  let longest = arr1.length > arr2.length ? arr1 : arr2
  let shortest = arr1.length > arr2.length ? arr2 : arr1
  let matches = longest.filter(item => shortest.includes(item))
  let newArr = arr1.concat(arr2).filter(item => !matches.includes(item))
  return newArr;
}

export default diffArray

// Intermediate (Declarative Solution)
// const diffArray = (arr1, arr2) => {
//   return arr1
//     .concat(arr2)
//     .filter(
//         item => !arr1.includes(item) || !arr2.includes(item)
//     )
// }

// Advanced (Declarative Solution)
// const diffArray = (arr1, arr2) => {
//     return arr1
//       .filter(el => !arr2.includes(el))
//       .concat(
//         arr2.filter(el => !arr1.includes(el))
//       )
// }
