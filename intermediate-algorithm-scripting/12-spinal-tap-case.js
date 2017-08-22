// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
// Here are some helpful links:
//
// RegExp
// String.prototype.replace()

const spinalCase = str => {

  // is capital preceded by a space?
  // simplest method is to add a space
  // replace capitals with lowercase
  // replace spaces and underscores with '-'s
}



module.exports = spinalCase

// Partially working .map solution

// let letterStore = ''
// let output
// return str.split('').map((letter, array, index) => {
//   if (letterStore === '') {
//     output = letter
//   } else if ((letter === "_") || (letter === " ")) {
//     output = "-"
//   } else if ((letter === letter.toUpperCase()) && ((letterStore !== ' ') && (letterStore !== '_') && (letterStore !== '-'))) {
//     output = '-' + letter
//   } else {
//     output = letter
//   }
//   output = output.toLowerCase()
//   letterStore = output.length > 1 ? output[1] : output
//   return output
// }).join('')
