const http = require('http')
const map = require('through2-map')
const url = require('url')

const port = process.argv[2]

const server = http.createServer((req, res) => {

  console.log('request', req.url);
  console.log('method', req.method);

  res.writeHead(200, { 'Content-Type': 'application/json' })

  queryParser(req.url)

  if (req.method === 'GET') {
    if ( endpoint === '/api/parsetime') {
      return res.end('time has parsed') // parse the time in here
    } else if ( endpoint === '/api/unixtime') {
      return res.end('unix thing') // do the unix thing
    } else {
      // 404 ?
    }
  } else {
    return res.end('I need a GET request pls\n')
  }

  res.body = {}

}).listen(port)

// give these variables global scope so queryParser can be neatly defined outside of the server function
let endpoint = ''
let query = ''

// Middleware
const queryParser = url => {
  endpoint = url.split('?')[0]
  query = url.split('?')[1]
  return console.log({endpoint, query});
}
