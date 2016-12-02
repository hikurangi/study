function diffArray(arr1, arr2) {
  longer = arr1.length > arr2.length ? arr1 : arr2
  shorter = arr1 === longer ? arr2 : arr1
  console.log({longer, shorter})
  var newArr = [];
  // Same, same; but different.
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
