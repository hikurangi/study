const http = require('http')
const url1 = process.argv[2]
const url2 = process.argv[3]
const url3 = process.argv[4]

const fetcher = (url, callback) => {
    http.get(url, res => {
    let output = ''
    res.setEncoding('utf8')
    res.on('data', data => { output += data }) // concatenate data as it arrives
    res.on('end', () => {
      console.log(output); // once we've got everything, print to console
      if ( callback && typeof callback === 'function') { callback(url, callback) }
    }).on('error', console.error) // copying these from the node docs, not sure what's essential
  }).on('error', console.error)
}

fetcher(url1, fetcher(url2, fetcher(url3, null)))
