// Missing letters
// Find the missing letter in the passed letter range and return it.
//
// If all letters are present in the range, return undefined.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
// Here are some helpful links:
//
// String.prototype.charCodeAt()
// String.fromCharCode()
// Run tests (ctrl + enter)

const fearNotLetter = str => {
  let indices = str.split('').map(letter => letter.charCodeAt(0))
  let complete = []
  for (let i = indices[0]; i <= indices[indices.length - 1]; i++) {
    complete.push(i)
  }
  let output = String.fromCharCode(complete.filter(missingValue => !indices.some(index => missingValue === index)))
  return output === "\u0000" ? undefined : output
}

module.exports = fearNotLetter
