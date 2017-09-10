module.exports = str => {
  const patt = new RegExp(/BANANAS$/) // '$' at end of pattern anchors the pattern to the end of the string.
  return patt.test(str)
}
