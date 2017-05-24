const fs = require('fs')

const directoryReader = (directory, extension, handler) => {
  fs.readdir(directory, 'utf8', handler)
}

module.exports = directoryReader
