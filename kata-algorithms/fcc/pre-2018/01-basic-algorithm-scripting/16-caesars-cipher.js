// 1.16 - Caesars Cipher

// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
//
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
//
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
//
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
// Here are some helpful links:
//
// String.prototype.charCodeAt()
// String.fromCharCode()

const rot13 = str => str.split('')
  .map(letter => letter.charCodeAt(0) > 64 && letter.charCodeAt(0) < 91 ? String.fromCharCode((letter.charCodeAt(0) - 13) < 65 ? 91 - (65 - (letter.charCodeAt(0) - 13)) : letter.charCodeAt(0) - 13) : letter)
  .join('')

// Thought process / pseudocode for the above:

// 1. Is the letter within the 65-90 unicode range? (outer ternary)
// 2. If you subtract 13 from it, is it less than 65?
// 3. If it is less than 65, subtract the difference between its charCode and 65 from 91 (looping it round the alphabet)

// Model Answer - Basic

// function rot13(str) {
//   // Split str into a character array
//   return str.split('')
//   // Iterate over each character in the array
//     .map.call(str, function(char) {
//       // Convert char to a character code
//       x = char.charCodeAt(0);
//       // Checks if character lies between A-Z
//       if (x < 65 || x > 90) {
//         return String.fromCharCode(x);  // Return un-converted character
//       }
//       //N = ASCII 78, if the character code is less than 78, shift forward 13 places
//       else if (x < 78) {
//         return String.fromCharCode(x + 13);
//       }
//       // Otherwise shift the character 13 places backward
//       return String.fromCharCode(x - 13);
//     }).join('');  // Rejoin the array into a string
// }

// Model Answer - Intermediate

// // Solution with Regular expression and Array of ASCII character codes
// function rot13(str) {
//   var rotCharArray = [];
//   var regEx = /[A-Z]/ ;
//   str = str.split("");
//   for (var x in str) {
//     if (regEx.test(str[x])) {
//       // A more general approach
//       // possible because of modular arithmetic
//       // and cyclic nature of rot13 transform
//       rotCharArray.push((str[x].charCodeAt() - 65 + 13) % 26 + 65);
//     } else {
//       rotCharArray.push(str[x].charCodeAt());
//     }
//   }
//   str = String.fromCharCode.apply(String, rotCharArray);
//   return str;
// }
//
// // Change the inputs below to test
// rot13("LBH QVQ VG!");

// Model Answer - Advanced

// function rot13(str) { // LBH QVQ VG!
//   return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
// }

// https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-caesars-cipher/16003

export default rot13
