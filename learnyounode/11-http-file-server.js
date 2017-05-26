const http = require('http')
const fs = require('fs')
const port = process.argv[2]
const filePath = process.argv[3]

const server = http.createServer((req, res) => {
  // request handling logic
  fs.createReadStream(filePath).stream.pipe(res) // to destination
})

server.listen(port)
