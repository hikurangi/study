module.exports = str => {
  const m = new RegExp(/x=(\d+)/).exec(str) // the capture group (the regex within the parentheses) will be captured and available on the match object
  return m ? m[1] : null
}
