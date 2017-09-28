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

  const noDupes = args.map(arr => [...new Set(arr)])

  const tally = arr => arr.reduce((obj, val) => {
    obj[val] = (obj[val] || 0) + 1
    return obj
  }, {})
  
  const unique = obj => {
    const arr = []
    for (let key in obj) {
      if (obj[key] === 1) {
        arr.push(+key)
      }
    }
    return arr
  }

  const called = unique(tally(noDupes[0].concat(noDupes[1])))

  if (args.length > 2) {
    return sym(called, ...args.slice(2))
  } else if (args.length === 2) {
    return called
  } else {
    return args
  }
}

export default sym
