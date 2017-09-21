// 2.20 - Everything Be True

// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
//
// Remember, you can access object properties through either dot notation or [] notation.

const truthCheck = (collection, pre) => collection.every(item => item[pre])

module.exports = truthCheck
