// function duckCount () {
//   const args = Array.prototype.slice.call(arguments)
//   args.reduce((acc, arg) => {
//     if (arg.hasOwnProperty('quack')) {return ++acc}
//     return acc
//   }, 0)
// }

const duckCount = (arg) => {
  console.log({ arg })
  if (arg.hasOwnProperty('quack')) {
    return 1
  }
  //   Array.isArray(args)
  //     ? args.reduce((acc, arg) => {
  //       if (arg.hasOwnProperty('quack'))++acc
  //       return acc
  //     }, 0)
  //     : arg.hasOwnProperty
  return arg
}


module.exports = duckCount
