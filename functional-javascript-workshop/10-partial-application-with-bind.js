const logger = namespace =>
  (...text) =>
    console.log(
      namespace,
      ...text
    )


module.exports = logger

// model answer
const loggerAnswer = function (namespace) {
  return console.log.bind(console, namespace)
}