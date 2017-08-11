// 1.14 - Seek and Destroy

// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
//
// Here are some helpful links:
//
// Arguments object
// Array.prototype.filter()

const destroyer = arr => {
  console.log({arguments: arguments});
  // Remove all the values
  let initial = arguments[0]
  let targets = arguments.slice(1)

  return initial.filter(initialItem => targets.forEach(target => target != initialItem))

}

module.exports = destroyer
