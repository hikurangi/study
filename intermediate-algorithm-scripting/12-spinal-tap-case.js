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
  // check for:
  const match0 = new RegExp(/( )([A-Z])[a-z]*/) // space before capital - replace with '-a'

  const match1 = new RegExp(/( )\w*/) // space before regular letter - replace space with '-'

  const match2 = new RegExp(/[a-z]([A-Z])/) // capital without space - replace with '-a'

  // split at any of the four below cases:
  return str.replace()
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
