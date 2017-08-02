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
  for (let i = 1; i < arr.length/size + 1; i++) {
    newArr.push(arr.slice(size*(i-1), size*i))
  }
  return newArr
}

module.exports = chunkArrayInGroups

// Neato model answers

// Basic

// function chunkArrayInGroups(arr, size) {
//
//   var temp = [];
//   var result = [];
//
//   for (var a = 0; a < arr.length; a++) {
//     if (a % size !== size - 1)
//       temp.push(arr[a]);
//     else {
//       temp.push(arr[a]);
//       result.push(temp);
//       temp = [];
//     }
//   }
//
//   if (temp.length !== 0)
//     result.push(temp);
//   return result;
// }


// Intermediate Code Solution:

// function chunkArrayInGroups(arr, size) {
//   // Break it up.
//   var arr2 = [];
//   for (var i = 0; i < arr.length; i+=size) {
// 	arr2.push(arr.slice(i , i+size));
//   }
//   return arr2;
// }

// Advanced Code Solution:

// function chunkArrayInGroups(arr, size) {
//   // Break it up.
//   var newArr = [];
//   var i = 0;
//
//   while (i < arr.length) {
//     newArr.push(arr.slice(i, i+size));
//     i += size;
//   }
//   return newArr;
// }
// chunkArrayInGroups(["a", "b", "c", "d"], 2);

// Advanced Code Solution 2:

// function chunkArrayInGroups(arr, size) {
//   var newArr = [];
//   while (arr.length) {
//     newArr.push(arr.splice(0,size));
//   }
//   return newArr;
// }
