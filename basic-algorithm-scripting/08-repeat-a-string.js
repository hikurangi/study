// 1.8 - Repeat a string repeat a string

// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
//
// Here are some helpful links:
//
// Global String Object

const repeatStringNumTimes = (str, num) => {
  let target = str
  if (num <= 0) {
    return ''
  } else {
    for (let i = 1; i < num; i++) {
      target+=str
    }
    return target
  }
}

module.exports = repeatStringNumTimes
