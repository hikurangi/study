// Pig Latin
// Translate the provided string to pig latin.
//
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
//
// If a word begins with a vowel you just add "way" to the end.
//
// Input strings are guaranteed to be English words in all lowercase.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
// Here are some helpful links:
//
// Array.prototype.indexOf()
// Array.prototype.push()
// Array.prototype.join()
// String.prototype.substr()
// String.prototype.split()

// tricky!
const translatePigLatin = str => {
  let consonantCluster = ''
  // check if the first word is a vowel
  if (isVowel(str[0])) {
    return str + 'way'
  } else {
    // check the string for 
  }
}

const isVowel = letter => {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(letter.toLowerCase()) !== -1 // returns true if the letter passed is a vowel
}

module.exports = translatePigLatin

// translatePigLatin("california") should return "aliforniacay".
// translatePigLatin("paragraphs") should return "aragraphspay".
// translatePigLatin("glove") should return "oveglay".
// translatePigLatin("algorithm") should return "algorithmway".
// translatePigLatin("eight") should return "eightway".
