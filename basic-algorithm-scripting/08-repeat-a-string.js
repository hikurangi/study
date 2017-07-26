const repeatStringNumTimes = (str, num) => {
  for (let i = 0; i < num; i++) {
    str+=str
  }
  console.log({str});
  return str
}

module.exports = repeatStringNumTimes

repeatStringNumTimes('cheese', 7)
