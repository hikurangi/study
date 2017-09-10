module.exports = str => {
  const patt = new RegExp(/BANANAS$/)
  return patt.test(str)
}
