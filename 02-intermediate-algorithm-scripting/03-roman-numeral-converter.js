// 03 - Roman Numeral Converter

// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

// See also: http://www.mathsisfun.com/roman-numerals.html
// Array.prototype.splice()
// Array.prototype.indexOf()
// Array.prototype.join()

// My attempt:

// better to go larger to smaller?

const convertToRoman = num => {
  // go larger to smaller - we need to handle up to four digits worth
  let output = num.toString() // make the number splittable
    .split('')
    .map(digit => parseInt(digit)) // make the array of strings into numbers again. Not strictly necessary due to type inference.
    .map((digit, index, array) => {
      let numeral
      const column = array.length - index
      if (column === 4) { // if we are in the thousands column (are we 4th from the left?)
        numeral = 'M'.repeat(digit)
      } else if (column === 3) { // hundreds column
        if (digit < 4) {
          numeral = 'C'.repeat(digit)
        } else if (digit === 4) {
          numeral = 'CD'
        } else if (digit === 5) {
          numeral = 'D'
        } else if (digit > 5 && digit < 9) {
          numeral = 'D' + 'C'.repeat(digit-5)
        } else if (digit === 9) {
          numeral = 'CM'
        }
      } else if (column === 2) { // tens
        if (digit < 4) {
          numeral = 'X'.repeat(digit)
        } else if (digit === 4) {
          numeral = 'XL'
        } else if (digit === 5) {
          numeral = 'L'
        } else if (digit > 5 && digit < 9) {
          numeral = 'L' + 'X'.repeat(digit-5)
        } else if (digit === 9) {
          numeral = 'XC'
        }
      } else if (column === 1) { // ones
        if (digit < 4) {
          numeral = 'I'.repeat(digit)
        } else if (digit === 4) {
          numeral = 'IV'
        } else if (digit === 5) {
          numeral = 'V'
        } else if (digit > 5 && digit < 9) {
          numeral = 'V' + 'I'.repeat(digit-5)
        } else if (digit === 9) {
          numeral = 'IX'
        }
      }
      return numeral
  })
  return output.join('')
}

export default convertToRoman
