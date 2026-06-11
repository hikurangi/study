const Spy = (target, method) => {
  console.log('target method', target[method].toString());
}

module.exports = Spy