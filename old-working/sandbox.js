function rot13(str) { // LBH QVQ VG!
  let unicode = []
  console.log('STR =', str)

  for (let i = 0; i<str.length; i++) {

    let unicodeIndex = str.charCodeAt(i)
    let adjustedIndex = unicodeIndex - 13
    let capsAlphaNumCheck = unicodeIndex > 64 && unicodeIndex < 91

    if (!capsAlphaNumCheck) {
      unicode.push(unicodeIndex)
    } else if (adjustedIndex < 65) {
      unicode.push(91 - (65 - adjustedIndex))
    } else {
      unicode.push(adjustedIndex)
    }

  }

  return String.fromCharCode.apply(null, unicode)

}

// Change the inputs below to test
rot13("LBH QVQ VG!")
// rot13("SERR PBQR PNZC")
