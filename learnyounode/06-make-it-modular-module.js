const fs = require('fs')
const path = require('path')

module.exports = (dirName, extension, callback) => {
  fs.readdir(dirName, 'utf8', (err, data) => {
    if (err) return callback(err) // early return
    let output = data.filter((file) => {
      if ( path.extname(file) === '.' + extension) {
        return file
      }
    })
    callback(null, output) // the callback needs to log the outcome
  })
}
