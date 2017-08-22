// Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
//
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
//
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
//
// Check the assertion tests for examples.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
// Here are some helpful links:
//
// Arguments object
// Array.prototype.reduce()

const uniteUnique = (...args) => args.reduce((array, accumulator) => array.concat(accumulator), []).filter((item, position, array) => array.indexOf(item) === position)

module.exports = uniteUnique

// Model Answer - Intermediate - like mine but nests the filter within the reduce. Nifty.

// function uniteUnique(arr1, arr2, arr3) {
//  var newArr;
//  //Convert the arguments object into an array
//   var args = Array.prototype.slice.call(arguments);
//   //Use reduce function to flatten the array
//   newArr = args.reduce(function(arrA,arrB){
//   //Apply filter to remove the duplicate elements in the array
//     return arrA.concat(arrB.filter(function(i){
//       return arrA.indexOf(i) === -1;
//     }));
//   });
//
//    return newArr;
// }

// Model Answer - Advanced

// function uniteUnique() {
//   var concatArr = [];
//   var i = 0;
//   while (arguments[i]){
//     concatArr = concatArr.concat(arguments[i]); i++;
//   }
//   uniqueArray = concatArr.filter(function(item, pos) {
//     return concatArr.indexOf(item) == pos;
//   });
//   return uniqueArray;
// }
