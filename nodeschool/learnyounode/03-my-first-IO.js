const fs = require('fs')
let readFile = fs.readFileSync(process.argv[2])
let output = readFile.toString().split('\n')
console.log(output.length - 1);
