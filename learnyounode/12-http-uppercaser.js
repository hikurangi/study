const http = require('http')
const map = require('through2-map')

const port = process.argv[2]

const server = http.createServer((req, res) => {

  if (req.method !== 'POST') {
    return res.end(('I need a POST pls\n'))
  }

  req.pipe(map(chunk => {
    return chunk.toString('utf8').toUpperCase()
  })).pipe(res)

})

server.listen(port)

// var http = require('http')
// var map = require('through2-map')
//
// var server = http.createServer(function (req, res) {
//   if (req.method !== 'POST') {
//     return res.end('send me a POST\n')
//   }
//
//   req.pipe(map(function (chunk) {
//     return chunk.toString().toUpperCase()
//   })).pipe(res)
// })
//
// server.listen(Number(process.argv[2]))
