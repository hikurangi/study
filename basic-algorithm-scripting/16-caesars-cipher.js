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

const rot13 = str => str.split('').map(letter => letter.charCodeAt(0) > 64 && letter.charCodeAt(0) < 91 ? String.fromCharCode((letter.charCodeAt(0) - 13) < 65 ? 91 - (65 - (letter.charCodeAt(0) - 13)) : letter.charCodeAt(0) - 13) : letter).join('')

// Thought process / pseudocode for the above:

// 1. Is the letter within the 65-90 unicode range? (outer ternary)
// 2. If you subtract 13 from it, is it less than 65?
// 3. If it is less than 65, subtract the difference between its charCode and 65 from 90 (looping it round the alphabet)

module.exports = rot13
