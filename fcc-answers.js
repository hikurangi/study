// // MUTATION
// function mutation(arr) {
// 	var string1 = arr[0].toUpperCase()
// 	var string2 = arr[1].toUpperCase()
// 		var bool = true
// 	for (var i = 0; i < string2.length; i++) {
// 		if (string1.indexOf(string2[i]) < 0) {
// 			bool = false
// 		}
// 	}
// 	return bool
// }

// mutation(["hello", "Hello"])

// // FALSY BOUNCER
// function bouncer(arr) {
//   return arr.filter(function (currentValue) {
//     if (Boolean(currentValue) !== false) return currentValue
//   })
// }
// bouncer([7, "ate", "", false, 9]);

// // SEEK & DESTROY
function destroyer(arr) {

  // no twerking
  keys = Object.keys(arguments)
  const argsArr = keys.filter(function(index){
    return(arguments[keys[index]])
  })

  // for (let i = 0; i < keys.length; i++) {
  //   argsArr.push(arguments[keys[i]])
  // }

  console.log(argsArr)
	// var args = arr.slice(Object.keys(arguments))
	// arr.filter(function(arguments){
	// 	console.log('inner arguments', arguments)
	// })
}

// My answer
function destroyer(arr) {
  var argArr = Array.from(arguments)
  console.log('argArr before splice', argArr)
  var firstArr = argArr.shift()
  console.log('firstArr', firstArr)
  console.log('argArr after shift', argArr);
  var output = firstArr.filter(function(item){
    return argArr.indexOf(item) < 0 ? item : null
  })
  return output
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Model answer
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments); // turn the arguments variable into a full array instead of the limited array it currently is.
  args.splice(0, 1); // Next I remove the first argument since I don't need, since I only want the other arguments passed besides the first which is the array we are going to compare against.
  return arr.filter(function(element) {
    return args.indexOf(element) === -1; // Then use the filter() to filter out the elements that are on the array and keep the ones that are not.
  });
}

// WHERE DO I BELONG

// My answer

function getIndexToIns(arr, num) {

  let array = arr
  let number = num
  function sortNumber (a,b) {
    return a - b;
  }

  if ( array.indexOf(number) > -1 ) {
    array.sort(sortNumber)
    return array.indexOf(number)
  } else {
    array.push(number)
    array.sort(sortNumber)
    return array.indexOf(number)
  }

}

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  return num;
}

getIndexToIns([40, 60], 50);
