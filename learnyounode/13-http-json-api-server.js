const http = require('http')
const url = require('url')

const port = process.argv[2]

const server = http.createServer((req, res) => {

  res.writeHead(200, { 'Content-Type': 'application/json' })

  const processed = url.parse(req.url)
  let resObj = {}
  let dateObj = new Date(processed.query.slice(4))

  if (req.method !== 'GET') {
    return res.end('I need a GET request pls\n')
  } else if ( processed.pathname === '/api/parsetime ') {
    resObj = {
      "hour": dateObj.getHours(),
      "minute": dateObj.getMinutes(),
      "second": dateObj.getSeconds()
    }
    return res.end(JSON.stringify(resObj))
  } else if ( processed.pathname === '/api/unixtime' ) {
    resObj = {
      "unixtime": dateObj.getTime()
    }
    return res.end(JSON.stringify(resObj)) // gives unixtime
  } else {
    return res.end('Invalid request')
  }

}).listen(port)

// var http = require('http')
// var url = require('url')
//
// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }
//
// function unixtime (time) {
//   return { unixtime: time.getTime() }
// }
//
// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result
//
//   if (/^\/api\/parsetime/.test(req.url)) {
//     result = parsetime(time)
//   } else if (/^\/api\/unixtime/.test(req.url)) {
//     result = unixtime(time)
//   }
//
//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))
