const fs = require('fs')
const path = require('path')

// much slower than using file.includes('.' + process.argv[3]) but more semantic.
const dir = process.argv[2]
const extension = process.argv[3]

fs.readdir(dir, 'utf8', (err, data) => {
  if (err) return console.error(err) // my solution was missing error (first) handling
  data.forEach((file) => {
    if ( path.extname(file) === '.' + extension) {
      console.log(file);
    }
  })
})
