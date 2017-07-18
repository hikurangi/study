const repeat = (operation, num) => {
  if (num > 0) { repeat(operation, num-1) } else return
}

module.exports = repeat
