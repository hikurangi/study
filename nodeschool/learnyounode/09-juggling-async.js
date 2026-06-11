const http = require('http')

let args = process.argv.slice(2)
// console.log({args});
let tracker = 2 // skip first two items in process.argv
let results = []

const fetcher = (urls) => {
  // console.log({urls, tracker});
  let url = urls.shift()
  http.get(url, res => {
    let output = ''
    res.setEncoding('utf8')
    res.on('error', err => {
      console.error(err);
    });
    res.on('data', data => { output += data }) // concatenate data as it arrives
    res.on('end', () => {
      tracker++
      results.push({tracker, output})
      urls.length ? fetcher(urls) : ( results.sort(sortByProp).forEach( item => { console.log(item.output) } ) )
    }).on('error', console.error) // not sure what's necessary
  })
}

// actual business time
fetcher(args)

// could do this with a nested ternary but that gross.
sortByProp = (a, b) => {
  // console.log({a, b});
  if (a.tracker < b.tracker) return -1
  if (a.tracker > b.tracker) return 1
  return 0
}

// Model Answer

// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0
//
// function printResults () {
//   for (var i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }
//
// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }
//
//       results[index] = data.toString()
//       count++
//
//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }
//
// for (var i = 0; i < 3; i++) {
//   httpGet(i)
// }
