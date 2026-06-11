// 1.4 - Find the Longest Word in a String

// Return the length of the longest word in the provided sentence.
//
// Your response should be a number.
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
//
// Here are some helpful links:
//
// String.prototype.split()
// String.length

const findLongestWord = str => str.split(' ').reduce((first, second) => first.length > second.length ? first : second).length

export default findLongestWord
