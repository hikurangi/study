function diffArray(arr1, arr2) {
  // Same, same; but different.
  bigArr = arr1.concat(arr2)
  counterObj = {}
  for (let i = 0; i < bigArr.length; i++) {
    if (!counterObj[bigArr[i]]) {
      counterObj[bigArr[i]] = 1
    } else {
      counterObj[bigArr[i]]++
    }
  }

  console.log({counterObj})

  // return only items from the array which appear once
  let newArr = []

  for (let prop in counterObj) {
    if (counterObj.hasOwnProperty(prop)) {
      if(counterObj[prop] === 1) {
        newArr.push(prop)
      }
    }
  }

  console.log(newArr)

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// take one array.
 // at index[0], match that number against
