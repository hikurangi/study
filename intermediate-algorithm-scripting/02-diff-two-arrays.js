// Diff Two Arrays

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// My Solution #1: Using arr.concat to combine arrays to check for multiple instances of the same value - hint 1 from https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Diff-Two-Arrays
function diffArray(arr1, arr2) {

  let bigArr = arr1.concat(arr2)

  let counterObj = {}

  // add the items as keys to an object, and increment the counter for each time they appear in the array
  for (let i = 0; i < bigArr.length; i++) {
    if (!counterObj[bigArr[i]]) {
      counterObj[bigArr[i]] = 1
    } else {
      counterObj[bigArr[i]]++
    }
  }

  console.log({counterObj})

  let newArr = []

  // return only items from the array which appear once
  for (let prop in counterObj) {
    if (counterObj.hasOwnProperty(prop)) {
      if(counterObj[prop] === 1) {
        newArr.push(isNaN(prop) ? prop : +prop)
      }
    }
  }

  console.log({newArr})

  return newArr

}

// Solution 2


// tests
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // 4
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) // ["pink wool"].
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) // ["diorite", "pink wool"].
diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]) // [].
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]) // ["piglet", 4].
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]) // ["snuffleupagus", "cookie monster", "elmo"].
diffArray([1, "calf", 3, "piglet"], [7, "filly"]) // [1, "calf", 3, "piglet", 7, "filly"].
