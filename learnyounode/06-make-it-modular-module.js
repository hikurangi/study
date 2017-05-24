const fs = require('fs')
const path = require('path')

module.exports = (dirName, extension, callback) => {
  fs.readdir(dirName, 'utf8', (err, data) => {
    if (err) return callback(err) // early return
    data = data.filter((file) => { return path.extname(file) === '.' + extension })
    callback(null, data) // the callback needs to log the outcome
  })
}
