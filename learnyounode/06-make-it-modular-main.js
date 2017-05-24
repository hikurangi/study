const directoryReader = require('./06-make-it-modular-module')
const path = require('path')
const dirFilter = (err, data) => {
  if (err) return console.error(err)
  data.filter((file) => {
    const correctExtension = path.extname(file)
    if ( path.extname(file) === '.' + extension) {
      return file
    }
  }).forEach((item) => {
    console.log(item);
  })
}

directoryReader(process.argv[2], process.argv[3], dirFilter)
