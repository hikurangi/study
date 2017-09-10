module.exports = str => {
  const patt = new RegExp(/^[aeiou|0-9]/)
  return patt.test(str)
}
