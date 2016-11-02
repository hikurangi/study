// freeCodeCamp solutions
// Chunky Monkey

function chunkArrayInGroups (arr, size) {
  var newArr = []
  for (var i = 0; i < (arr.length / size); i++) {
    newArr.push(arr.slice((i * size), ((i + 1) * size)))
  }
  return newArr
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2)

// Slasher Flick
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  arr.splice(0, howMany)
  return arr;
}

// Mutations
function mutation(arr) {
  var string1 = arr[0].toUpperCase()
  var string2 = arr[1].toUpperCase()
  console.log(string1.indexOf(string2) > -1)
  return string1.indexOf(string2) > -1
  // for (var i = 0; i < string1.length; i++) {
  //   for (var j = 0; j < string2.length; j++) {
  //     if ()
  //   }
  // }

  // if string1 has any characters which string2 does not
  // return false
  // else return true
}

mutation(["hello", "hey"]);

// function chunkArrayInGroups(arr, size) {
//   newArr = []
//   for (var i = 0; i<(arr.length/size); i++) {
//     newArr.push(arr.slice(i, size * (i + 1)))
//   }
//   console.log(newArr)
//   return newArr
// }
//
// chunkArrayInGroups(["a", "b", "c", "d"], 2)

// function chunkArrayInGroups(arr, size) {
//   var newArr = []
//   var multiplier = arr.length / size
//   for (var i = 0; i < arr.length; i++) {
//     if (i > multiplier) {
//       return
//     } else {
//       newArr[i] = arr.slice(i, size)
//     }
//   }
//   return arr;
// }
//
// chunkArrayInGroups(["a", "b", "c", "d"], 2);
