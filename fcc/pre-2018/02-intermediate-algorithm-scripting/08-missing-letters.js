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
  let complete = [] // a complete list of integers including the missing one
  for (let i = indices[0]; i <= indices[indices.length - 1]; i++) {
    complete.push(i)
  }
  let output = String.fromCharCode(complete.filter(missingValue => !indices.some(index => missingValue === index))) // this filter checks for values in the complete list that are missing from the input string
  return output === "\u0000" ? undefined : output // if the filter doesn't receive a value, it becomes the unicode for a space. Change that to undefined, otherwise just return the processed output value
}

export default fearNotLetter

// Model Answer - Basic

// function fearNotLetter(str) {
//
//   for(var i = 0; i < str.length; i++) {
//     /* code of current character */
//     var code = str.charCodeAt(i);
//
//     /* if code of current character is not equal to first character + no of iteration
//     hence character has been escaped */
//     if (code !== str.charCodeAt(0) + i) {
//
//       /* if current character has escaped one character find previous char and return */
//       return String.fromCharCode(code - 1);
//     }
//   }
//   return undefined;
// }

// Model Answer - Intermediate

// Adding this solution for the sake of avoiding using 'for' and 'while' loops.
// See the explanation for reference as to why. It's worth the effort.

// function fearNotLetter(str) {
//   var compare = str.charCodeAt(0), missing;
//
//   str.split('').map(function(letter,index) {
//     if (str.charCodeAt(index) == compare) {
//       ++compare;
//     } else {
//       missing = String.fromCharCode(compare);
//     }
//   });
//
//   return missing;
// }

// Model Answer - Advanced

// function fearNotLetter(str) {
//   var allChars = '';
//   var notChars = new RegExp('[^'+str+']','g');
//
//   for (var i = 0; allChars[allChars.length-1] !== str[str.length-1] ; i++)
//     allChars += String.fromCharCode(str[0].charCodeAt(0) + i);
//
//   return allChars.match(notChars) ? allChars.match(notChars).join('') : undefined;
// }
