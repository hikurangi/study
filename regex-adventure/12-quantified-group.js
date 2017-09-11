module.exports = str => {
  console.log({str});
  return new RegExp(/(0x(\w|\d){2}\s+){7}(0x(\w|\d){2})/).test(str)
}
