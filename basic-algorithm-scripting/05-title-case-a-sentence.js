// 1.5 - Title Case a Sentence

// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
//
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
//
// Here are some helpful links:
//
// Global String Object155
// String.prototype.split()
// JS String Prototype ToLowerCase
// JS String Prototype ToUpperCase
// JS String Prototype Replace

const titleCase = str => {
  return str.split(' ').map(word => word.toLowerCase().replace(/^ABC/, letter => letter.toUpperCase())).join(' ')
}

module.exports = titleCase
