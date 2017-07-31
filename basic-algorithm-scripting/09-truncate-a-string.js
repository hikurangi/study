// 1.9 Truncate a string

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
//
// Note that inserting the three dots to the end will add to the string length.
//
// However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
//
// Here are some helpful links:
//
// String.prototype.slice()

const truncateString = (str, num) => {
  if (num >= str.length) {
    return str
  } else if (num <= 0) {
    return ''
  } else {
    return str.trim().slice(0, num > 3 ? num - 3 : num) + '...'
}

module.exports = truncateString

// FCC Model Answer ft. neat use of a ternary inside the slice method

// function truncateString(str, num) {
//   if (str.length <= num) {
//     return str;
//   } else {
//     return str.slice(0, num > 3 ? num - 3 : num) + '...';
//   }
// }
