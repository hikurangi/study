// Binary Agents

// Return an English translated sentence of the passed binary string.
//
// The binary string will be space separated.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
// Here are some helpful links:
//
// String.prototype.charCodeAt()
// String.fromCharCode()

const binaryAgent = str => str
  .split(' ') // ["01001001", "00100000", "01101100"...]
  .map(word => String.fromCharCode(parseInt(word, 2))) // map over the array of binary strings. parseInt(word, 2) takes a string (the parameter 'word') of binary (as indicated by a radix of 2, the second parameter) and converts it to a UTF character code. Calling String.fromCharCode() on that character code returns an actual letter. The array now looks like: ["A", "r", "e", "n", "'", "t", " ", "b", "o", "n", "f", "i", "r", "e", "s", " "...
  .join('') // join the array together with no separator

module.exports = binaryAgent
