module.exports = str => {
  return new RegExp(/^(0x[\w\d]{2}\s+){8}$/).test(str)
}
