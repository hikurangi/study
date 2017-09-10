module.exports = str => new RegExp(/^\D[^A-Z]/).test(str) // \D metacharacter checks for any digit 0-9, saves writing out a whole class
