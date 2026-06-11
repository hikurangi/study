module.exports = str => {
  const patt = new RegExp('LITERALLY')
  return patt.test(str) // whatWeAreLookingFor.test(theStringWeAreSearchingInsideOf)
}
