// My Answer
const duckCount = (...args) => args.reduce((acc, arg) => {
  if (Object.prototype.hasOwnProperty.call(arg, 'quack'))++acc
  return acc
}, 0)

module.exports = duckCount


// Model Answer:
function duckCountModel() {
  return Array.prototype.slice.call(arguments).filter(function (obj) {
    return Object.prototype.hasOwnProperty.call(obj, 'quack')
  }).length
}