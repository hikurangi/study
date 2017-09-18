// 2.18 - Steamroller

// Flatten a nested array. You must account for varying levels of nesting.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
// Here are some helpful links:
//
// Array.isArray()

const steamrollArray = arr => arr
  .reduce((flattened, current) => flattened.concat(Array.isArray(current) ? steamrollArray(current) : current), [])

module.exports = steamrollArray
