const countWords = inputWords => {
  return inputWords.reduce((obj, curr) => {
    if (!obj) {
      obj = {}
      obj[curr] = 1
    } else if (!obj[curr]) {
      obj[curr] = 1
    } else if (obj[curr]) {
      obj[curr]++
    }
  })
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
