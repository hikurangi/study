const http = require('http')
const map = require('through2-map')
const url = require('url')

const port = process.argv[2]

const server = http.createServer((req, res) => {

  console.log('request', req.url);
  console.log('method', req.method);

  res.writeHead(200, { 'Content-Type': 'application/json' })

  const processed = url.parse(req.url)

  if (req.method === 'GET') {
    if ( processed.pathname === '/api/parsetime') {
      const isoDate = parseISOString(processed.query)
      console.log({isoDate})
      return res.end('ISO time object')
    } else if ( processed.pathname === '/api/unixtime') {
      return res.end(Date.parse(processed.query)) // do the unix thing
    } else {
      // 404 ?
    }
  } else {
    return res.end('I need a GET request pls\n')
  }

  res.body = {}

}).listen(port)

// Middleware
const parseISOString = str => {
  const b = str.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
}
