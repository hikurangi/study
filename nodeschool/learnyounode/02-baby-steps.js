let count = 0
process.argv.forEach((item) => { if (!isNaN(+item)) { count += +item } })
console.log(count);
