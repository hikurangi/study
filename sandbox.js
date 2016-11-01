// function getIndexToIns(arr, num) {
//   console.log('arr notransform', arr)
//   console.log('num notransform', arr)
//   console.log('arguments', arguments)
//   var args = Array.prototype.slice.call(arguments);
//   console.log('args', args)
//   var item1 = args[0]
//   var item2 = args[1]
//   console.log('arr argumentified', item1 )
//   var sorting = item1.push(item2)
//   console.log('array to be sorted', sorting)
//   // return arguments[1].indexOf(sorting.sort())
// }
//
// getIndexToIns([40, 60], 50);

// doesn't work for when arr contains num
// function getIndexToIns(arr, num) {
//   let array = arr
//   let number = num
//   if ( array.indexOf(number) > -1 ) {
//     array.sort()
//     return array.indexOf(number)
//     console.log(array.indexOf(number))
//   } else {
    // array.push(number)
    // array.sort()
    // console.log(array.indexOf(number))
    // return array.indexOf(number)
//   }
// }

// https://github.com/Rafase282/My-FreeCodeCamp-Code/wiki/Bonfire-Where-do-I-belong

function getIndexToIns(arr, num) {

  function sortNumber (a,b) {
    return a - b;
  }

  if ( arr.indexOf(num) > -1 ) {
    arr.sort(sortNumber)
    return arr.indexOf(num)
  } else {
    arr.push(num)
    arr.sort(sortNumber)
    return arr.indexOf(num)
  }

}


getIndexToIns([10, 20, 30, 40, 50], 35) // should return 3.
getIndexToIns([10, 20, 30, 40, 50], 30) // should return 2.
getIndexToIns([40, 60], 50) // should return 1
getIndexToIns([3, 10, 5], 3) // should return 0.
getIndexToIns([5, 3, 20, 3], 5) // should return 2.
getIndexToIns([2, 20, 10], 19) // should return 2.
getIndexToIns([2, 5, 10], 15) // should return 3.
