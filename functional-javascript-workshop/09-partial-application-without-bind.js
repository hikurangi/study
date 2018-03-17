const slice = Array.prototype.slice

// My Answer - cheating with ES6
const logger = namespace =>
  (...text) =>
    console.log(
      namespace,
      ...text
    )

module.exports = logger

// Model Answer
// var slice = Array.prototype.slice

function loggerAnswer(namespace) {
  return function () {
    console.log.apply(console, [namespace].concat(slice.call(arguments)))
  }
}
