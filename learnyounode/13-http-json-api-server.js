const http = require('http')
const map = require('through2-map')
// const fs = require('fs') // probably unnecessary
const url = require('url')

const port = process.argv[2]

const server = http.createServer((req, res) => {

  console.log('request', req.url);
  console.log('method', req.method);

  res.writeHead(200, { 'Content-Type': 'application/json' })
  if (req.method === 'GET') {
    if (req.url === '/') { // this is about to get complex. split endpoint from query at '?'
      res.queryParser(req.url)
    }
  } else {
    return res.end(('I need a GET request pls\n'))
  }

  res.body = {}

}).listen(port)

// Middleware
const queryParser = url => {
  return console.log('this is where the query would be');
}
