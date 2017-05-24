const http = require('http')
const url = process.argv[2]

http.get(url, res => {
  res.setEncoding('utf8')
  res.on('data', data => {
    data.forEach(item => { console.log(item) })
  })

  res.on('end', () => {
    return data
  }).on('error', err => {
    console.error(`Got error: ${err.message}`)
  })

})
