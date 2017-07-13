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
  let processed = num.toString().split('')
  // console.log({numStr});
  let tenTracker = false
  for (let i = (processed.length - 1); i >= 0; i--) {
    let thisColumn = '' // is this a problem?
    // 1-3
    if ( processed[i] === '0' ) {
      tenTracker = true
      break // at the next column test whether there is a value in thisColumn? or just use tenTracker
    } else if ( processed[i] < 4 ) { // kind of a fall-through because 0 is already handled
      for ( let j = 0; j < processed[i]; j++ )
        thisColumn += 'I' // direct function of the number itself
    } else if ( processed[i] == 4 ) {
      thisColumn += 'IV' // is there a simpler way?
    } else if ( processed[i] == 5 ) {
      thisColumn += 'V'
    } else if ( processed[i] >= 6 && processed[i] <= 8 ) {
      thisColumn += 'V'
      for ( let j = 6; j <= processed[i]; j++ )
        thisColumn += 'I'
    } else {
      thisColumn += 'IX'
    }
    // replace the i-th item in processed with thisColumn
  processed.splice(processed.length, i, thisColumn)
  }
  console.log({num, processed, tenTracker});
}

module.exports = convertToRoman

// convertToRoman(36) // => XXXVI
// convertToRoman(2) // => "II".
// convertToRoman(3) // => "III".
// convertToRoman(4) // => "IV".
// convertToRoman(5) // => "V".
// convertToRoman(9) // => "IX".
// convertToRoman(12) // => "XII".
// convertToRoman(16) // => "XVI".
// convertToRoman(29) // => "XXIX".
// convertToRoman(44) // => "XLIV".
// convertToRoman(45) // => "XLV"
// convertToRoman(68) // => "LXVIII"
// convertToRoman(83) // => "LXXXIII"
// convertToRoman(97) // => "XCVII"
// convertToRoman(99) // => "XCIX"
// convertToRoman(500) // => "D"
// convertToRoman(501) // => "DI"
// convertToRoman(649) // => "DCXLIX"
// convertToRoman(798) // => "DCCXCVIII"
// convertToRoman(891) // => "DCCCXCI"
// convertToRoman(1000) // => "M"
// convertToRoman(1004) // => "MIV"
// convertToRoman(1006) // => "MVI"
// convertToRoman(1023) // => "MXXIII"
// convertToRoman(2014) // => "MMXIV"
// convertToRoman(3999) // => "MMMCMXCIX"

// function convertToRoman(num) {
  // (num += '').split('')
  // let numerals = ''
  // console.log(num);
  // for ( let i = 1; i <= num.length; i++ ) {
    // if ( num[num.length-i] < 4 ) {
    //   for ( let i = 0; i < num[num.length-1]; i++ )
    //     numerals += 'I'
    //   } else if ( num[num.length-i] == 4 ) {
    //     numerals += 'IV'
    //   } else if ( num[num.length-i] == 5 ) {
    //     numerals += 'V'
    //   } else if ( num[num.length-i] >= 6 && num[num.length-1] <= 8 ) {
    //     numerals += 'V'
    //     for ( let i = 6; i <= num[num.length-1]; i++ )
    //       numerals += 'I'
    //   } else {
    //     numerals += 'IX'
    //   }
  //   }
  // }
  // console.log(numerals);
  // return numerals;
// }
