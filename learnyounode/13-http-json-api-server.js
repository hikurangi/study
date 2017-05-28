const http = require('http')
const map = require('through2-map')
const url = require('url')

const port = process.argv[2]

const server = http.createServer((req, res) => {

  console.log('request', req.url);
  console.log('method', req.method);

  res.writeHead(200, { 'Content-Type': 'application/json' })

  let parsed = url.parse(req.url)
  console.log({parsed});

  if (req.method === 'GET') {
    if ( parsed.pathname === '/api/parsetime') {
      return res.end(JSON.stringify(parsed.query.toISOString())) // <= problem is here. parse the time in here
    } else if ( parsed.pathname === '/api/unixtime') {
      return res.end('unix thing') // do the unix thing
    } else {
      // 404 ?
    }
  } else {
    return res.end('I need a GET request pls\n')
  }

  res.body = {}

}).listen(port)
