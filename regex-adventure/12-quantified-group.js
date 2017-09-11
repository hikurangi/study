module.exports = str => {
  console.log({str});
  return new RegExp(/(0x\w\w\s+){7}(0x\w\w)/).test(str)
}
