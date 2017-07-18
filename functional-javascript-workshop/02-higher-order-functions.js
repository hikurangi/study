const repeat = (operation, num) => {
  if (num > 0) { repeat(operation, num-1) } else return
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
