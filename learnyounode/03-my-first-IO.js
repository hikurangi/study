const fs = require('fs')
let readFile = fs.readFileSync(process.argv[2])
console.log(readFile.buffer);
