module.exports = str => {
  const patt = new RegExp(/^LITERALLY/) // caret ^ goes at the beginning of a pattern to match it to the beginning of the tested string. You can place a RegExp pattern inside of quotes (it will be converted) or as a literal between forward-slashes
  return patt.test(str)
}
