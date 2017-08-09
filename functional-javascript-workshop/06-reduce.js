const countWords = inputWords => {
  return inputWords.reduce((counter, word) => {
    if (counter[word]) {
      counter[word]++ // if the word exists in the counter/accumulator, increment it
    } else {
      counter[word] = 1 // if the word doesn't exist in the counter/accumulator, set its value to 1
    }
    return counter // must return the counter/accumulator after the if statement has done its thing
  }, {}) // the initial value for the counter/accumulator (the first callback argument) is an empty counterect
}

module.exports = countWords

// Model Answer - neat use of ||

// function countWords(arr) {
//   return arr.reduce(function(countMap, word) {
//     countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
//     return countMap
//   }, {}) // second argument to reduce initialises countMap to {}
// }

// MDN example

// var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
//
// var countedNames = names.reduce(function (allNames, name) {
//   if (name in allNames) {
//     allNames[name]++;
//   }
//   else {
//     allNames[name] = 1;
//   }
//   return allNames;
// }, {});
// // countedNames is:
// // { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
