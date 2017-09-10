module.exports = str => new RegExp(/\d+\w\.jpe?g$/).test(str) // \d vs \D, \w vs \W
