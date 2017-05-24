const fs = require('fs')

const directoryReader = (directory, extension, handler) => {
  fs.readdir(directory, 'utf8', handler()).forEach((item) => {
    console.log(item);
  })
}

module.exports = directoryReader
