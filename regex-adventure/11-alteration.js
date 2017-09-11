module.exports = str => {
  console.log({str});
  new RegExp(/^(cat|dog|robot)\d$/).test(str)
}
