const http = require('http')
const url = process.argv[2]

http.get(url, res => {
  let output = ''
  res.setEncoding('utf8')
  res.on('data', data => { output += data }) // concatenate data as it arrives
  res.on('end', () => {
    console.log(`${output.length}\n${output}`); // once we've got everything, print to console
  }).on('error', console.error) // copying these from the node docs, not sure what's essential
}).on('error', console.error)
