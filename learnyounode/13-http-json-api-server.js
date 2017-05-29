const http = require('http')
const map = require('through2-map')
const url = require('url')

const port = process.argv[2]

const server = http.createServer((req, res) => {

  res.writeHead(200, { 'Content-Type': 'application/json' })

  const processed = url.parse(req.url)
  let resObj = {}
  let isoDate = splitISOString(processed.query)

  if (req.method === 'GET') {
    if ( processed.pathname === '/api/parsetime') {
      resObj = { "hour": +isoDate[3] === 12 ? 0 : isoDate[3], "minute": +isoDate[4], "second": +isoDate[5] }
      return res.end(JSON.stringify(resObj))

    } else if ( processed.pathname === '/api/unixtime') {

      resObj = { "unixtime": new Date(...isoDate).getTime() }
      return res.end(JSON.stringify(resObj)) // gives unixtime

    } else {
      // 404 ?
    }
  } else {
    return res.end('I need a GET request pls\n')
  }

  res.body = {}

}).listen(port)

// Utility
const splitISOString = str => {
  let split = str.split(/\D+/)
  split.shift()
  split.pop()
  return split
}
