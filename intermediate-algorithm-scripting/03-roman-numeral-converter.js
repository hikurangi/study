// 03 - Roman Numeral Converter

// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

// See also: http://www.mathsisfun.com/roman-numerals.html
// Array.prototype.splice()
// Array.prototype.indexOf()
// Array.prototype.join()

function convertToRoman(num) {
  (num += '').split('')
  let numerals = ''
  for ( let i = 1; i <= num.length; i++ ) {
    if ( num[num.length-i] < 4 ) {
      for ( let i = 0; i < num[num.length-1]; i++ )
        numerals += 'I'
      } else if ( num[num.length-i] == 4 ) {
        numerals += 'IV'
      } else if ( num[num.length-i] == 5 ) {
        numerals += 'V'
      } else if ( num[num.length-i] >= 6 && num[num.length-1] <= 8 ) {
        numerals += 'V'
        for ( let i = 6; i <= num[num.length-1]; i++ )
          numerals += 'I'
      } else {
        numerals += 'IX'
      }
    }
  }
  console.log(numerals);
  return numerals;
}

convertToRoman(36) // => XXXVI
convertToRoman(2) // => "II".
convertToRoman(3) // => "III".
convertToRoman(4) // => "IV".
convertToRoman(5) // => "V".
convertToRoman(9) // => "IX".
convertToRoman(12) // => "XII".
convertToRoman(16) // => "XVI".
convertToRoman(29) // => "XXIX".
convertToRoman(44) // => "XLIV".
convertToRoman(45) // => "XLV"
convertToRoman(68) // => "LXVIII"
convertToRoman(83) // => "LXXXIII"
convertToRoman(97) // => "XCVII"
convertToRoman(99) // => "XCIX"
convertToRoman(500) // => "D"
convertToRoman(501) // => "DI"
convertToRoman(649) // => "DCXLIX"
convertToRoman(798) // => "DCCXCVIII"
convertToRoman(891) // => "DCCCXCI"
convertToRoman(1000) // => "M"
convertToRoman(1004) // => "MIV"
convertToRoman(1006) // => "MVI"
convertToRoman(1023) // => "MXXIII"
convertToRoman(2014) // => "MMXIV"
convertToRoman(3999) // => "MMMCMXCIX"
