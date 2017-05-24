const fs = require('fs')

fs.readFile(process.argv[2], 'utf8', (err, data) => {
  output = data.toString().split('\n')
  console.log(output.length - 1);
})
