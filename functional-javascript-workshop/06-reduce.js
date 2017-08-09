const countWords = inputWords => {
  return inputWords.reduce((counter, word) => {
    if (!counter[word]) {
      counter[word] = 1
    } else {
      counter[word]++
    }
    return counter // must return the accumulator after the if statement has done its thing
  }, {}) // the initial value for the accumulator (the first callback argument) is an empty counterect
}

module.exports = countWords


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
