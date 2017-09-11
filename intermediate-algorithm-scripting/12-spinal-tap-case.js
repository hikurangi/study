// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
// Here are some helpful links:
//
// RegExp
// String.prototype.replace()

const spinalCase = str => str
  .replace(/[ _]/g, '-')
  .replace(/([a-z])([A-Z])/g, '$1-$2')
  .toLowerCase()

module.exports = spinalCase
