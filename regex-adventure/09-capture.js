module.exports = str => {
  const m = new RegExp(/x=\d+/).exec(str)
  return m ? m[1] : null
}
