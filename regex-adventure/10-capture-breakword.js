module.exports = str => {
  const m = new RegExp(/\bx=(\d+)\b/).exec(str) // surrounding the literal string and capture group with breakwords
  console.log({str, m});
  return m ? m[1] : null
}
