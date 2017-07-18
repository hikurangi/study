const repeat = (operation, num) => {
  if (num > 0) { repeat(operation, --num) } else return // pre-decrementing (say that eight times fast)
}

module.exports = repeat

// Official answer

// function repeat(operation, num) {
//   if (num <= 0) return
//   operation()
//   return repeat(operation, --num)
// }
//
// module.exports = repeat
