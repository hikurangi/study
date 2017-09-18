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
  .split(' ')
  .map(word => String.fromCharCode(parseInt(word, 2)))
  .join('')

module.exports = binaryAgent
