// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
// Here are some helpful links:
//
// RegExp
// String.prototype.replace()

// What I was trying to get at, with a single 'replace' call
const spinalCase = str => str
  .replace(/([a-z])([A-Z])|[_\s]+/g, '$1-$2') // since $1 and $2 only match the two capture groups and the [_\s]+ isn't referred to by the capture groups, it is replaced as if $1 and $2 don't exist, leaving only the '-' as the replacement string. Brilliant!
  .toLowerCase()

module.exports = spinalCase

// // My initial answer:

// const spinalCase = str => str
//   .replace(/[ _]/g, '-') // their regex is /\s+|_+/g
//   .replace(/([a-z])([A-Z])/g, '$1-$2')
//   .toLowerCase()

// // Basic Code Solution

// function spinalCase(str) {
//   // Create a variable for the white space and underscores.
//   var regex = /\s+|_+/g;
//
//   // Replace low-upper case to low-space-uppercase
//   str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
//
//   // Replace space and underscore with -
//   return str.replace(regex, '-').toLowerCase();
// }

// // Intermediate Code Solution:

// function spinalCase(str) {
//   // Replace low-upper case to low-space-uppercase
//   str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
//   // Split on whitespace and underscores and join with dash
//   return str.toLowerCase().split(/(?:_| )+/) .join('-');
// }

// // Advanced Code Solution

// function spinalCase(str) {
//   return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
// }
