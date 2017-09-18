// 2.18 - Steamroller

// Flatten a nested array. You must account for varying levels of nesting.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
// Here are some helpful links:
//
// Array.isArray()

const steamrollArray = arr => arr
  .reduce((flattened, current) => flattened.concat(Array.isArray(current) ? steamrollArray(current) : current), [])

module.exports = steamrollArray

// // Basic Code Solution
// function steamrollArray(arr) {
//   var flattenedArray = [];
//
//   // Create function that adds an element if it is not an array.
//   // If it is an array, then loops through it and uses recursion on that array.
//   var flatten = function(arg) {
//     if (!Array.isArray(arg)) {
//       flattenedArray.push(arg);
//     } else {
//       for (var a in arg) {
//         flatten(arg[a]);
//       }
//     }
//   };
//
//   // Call the function for each element in the array
//   arr.forEach(flatten);
//   return flattenedArray;
// }

// // Intermediate Code Solution - uses spread operator to flatten one layer of array at a time
// function steamrollArray(arr) {
//   let flat = [].concat(...arr);
//   return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
// }

// // Advanced Code Solution ft. genius level knowledge of javascript
// function steamrollArray(arr) {
//   return arr.toString()
//     .replace(',,', ',')       // "1,2,,3" => "1,2,3"
//     .split(',')               // ['1','2','3']
//     .map(function(v) {
//       if (v == '[object Object]') { // bring back empty objects
//         return {};
//       } else if (isNaN(v)) {        // if not a number (string)
//         return v;
//       } else {
//         return parseInt(v);         // if a number in a string, convert it
//       }
//     });
// }
