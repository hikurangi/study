const fs = require('fs')
const path = require('path')

const directoryReader = (directory, extension) => {
  fs.readdir(directory, 'utf8', (err, data) => {
    if (err) return console.error(err) // my solution was missing error (first) handling
    data.filter((file) => {
      const correctExtension = path.extname(file)
      if ( path.extname(file) === '.' + extension) {
        return file
      }
    }).forEach((item) => {
      console.log(item);
    })
  })
}

module.exports = directoryReader
