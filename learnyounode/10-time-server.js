const net = require('net')

// Date
const date = new Date()
const formattedDate = `${date.getFullYear()}-${'0' + (+date.getMonth() + 1)}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}\n` // zero-indexed months... wat?
const server = net.createServer(socket => {
  // socket handling logic
  socket.end(formattedDate) // socket.end also sends data to client
})

server.listen(process.argv[2]) // I'm guessing type coercion allows the string to be read as a number? 

// Model Answer

// var net = require('net')
//
// function zeroFill (i) {
//   return (i < 10 ? '0' : '') + i
// }
//
// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-' +
//     zeroFill(d.getMonth() + 1) + '-' +
//     zeroFill(d.getDate()) + ' ' +
//     zeroFill(d.getHours()) + ':' +
//     zeroFill(d.getMinutes())
// }
//
// var server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })
//
// server.listen(Number(process.argv[2]))
