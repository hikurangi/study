// Symmetric Difference

// Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.
//
// Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
// Here are some helpful links:
//
// Array.prototype.reduce()
// Symmetric Difference

const sym = (...args) => {
  // use a reduce / object counter on a concatenated version of both arrays - return only the values which are recorded number of arrays passed - 1 times
  // Step 1. Make this work for args[0] and args[1]
  console.log({args});
  const tally = args[0].concat(args[1])
    .reduce((obj, val) => {
      obj[val] = (obj[val] || 0) + 1 // could be worth a refactor
      return obj
    }, {})
  // turn symmetric to an array where the values appear only once
  const symmetric = []
  for (let key in tally) {
    if (tally[key] === 1) {
      symmetric.push(key)
    }
  }

  if (args.length > 2) {
    return sym(symmetric, ...args.slice(2))
  } else if (args.length === 2) {
    return symmetric
  } else {
    return args
  }
}

export default sym
