module.exports = directoryReader

directoryReader = fs.readdir(process.argv[2], 'utf8', (err, data) => {
  if (err) return console.error(err) // my solution was missing error (first) handling
  data.filter((file) => {
    const correctExtension = path.extname(file)
    if ( path.extname(file) === '.' + process.argv[3]) {
      return file
    }
  }).forEach((item) => {
    console.log(item);
  })
})
