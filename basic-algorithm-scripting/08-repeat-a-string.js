const repeatStringNumTimes = (str, num) => {
  let target = str
  for (let i = 0; i < num; i++) {
    target+=str
  }
  return target
}

module.exports = repeatStringNumTimes
