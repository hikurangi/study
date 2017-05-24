const fs = require('fs')
const path = require('path')

const fileMatches = require('./06-make-it-modular-module')

const dirName = process.argv[2]
const extension = process.argv[3]

const callback = (err, output) => {
  if (err) {
    return callback(err)
  } else {
    output.forEach(item => {console.log(item)})
  }
}

fileMatches(dirName, extension, callback)
