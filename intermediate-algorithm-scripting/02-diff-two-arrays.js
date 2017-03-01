// Diff Two Arrays

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// My Solution #1: Using arr.concat to combine arrays to check for multiple instances of the same value - hint 1 from https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Diff-Two-Arrays

function diffArray(arr1, arr2) {

  let bigArr = arr1.concat(arr2)

  let counterObj = {}

  // add the items as keys to an object, and increment the counter for each time they appear in the array
  for (let i = 0; i < bigArr.length; i++) {
    // if this item/'entry' in counterObj exists...
    counterObj[bigArr[i]]
    // ? add one to it...
    ? counterObj[bigArr[i]]++
    // : otherwise, initialise it with a value (tally) of one
    : counterObj[bigArr[i]] = 1
  }

  // console.log({counterObj})

  let newArr = []

  // return only items from the array which appear once
  for (let prop in counterObj) {
    // if the counterObj has a particular property...
    if (counterObj.hasOwnProperty(prop)) {
      // ...and that property has a value of one, meaning there's only one instance of it in the whole joined array, bigArr...
      if(counterObj[prop] === 1) {
        // ...push that key/property name, NOT its value to my output array (newArr), and if it's a number in the string, make sure that the number is actually numeric and not a string
        newArr.push(isNaN(prop) ? prop : +prop)
      }
    }
  }

  // console.log({newArr})

  return newArr

}

// tests
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // [4]
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) // ["pink wool"].
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) // ["diorite", "pink wool"].
diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]) // [].
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]) // ["piglet", 4].
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]) // ["snuffleupagus", "cookie monster", "elmo"].
diffArray([1, "calf", 3, "piglet"], [7, "filly"]) // [1, "calf", 3, "piglet", 7, "filly"].

module.exports = diffArray
