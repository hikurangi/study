// 3.4 - Exact Change

// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
//
// cid is a 2D array listing available currency.
//
// Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.
//
// Otherwise, return change in coin and bills, sorted in highest to lowest order.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
// Here are some helpful links:
//
// Global Object

// My approach does not assume an ordered array smallest to largest
const checkCashRegister = (price, cash, cid) => {
  const change = cash - price
  const ordered = cid.reverse()
  const tid = cid.reduce((a, b) => a + b[1], 0)
  // three part conditional:
  if (tid < change) { // 1) if cash in drawer is less than the change due:
    return 'Insufficient Funds'
  } else if (tid === change) { // 2) if cash in drawer is equal to the change due,
    return 'Closed'
  } else { // 3) if cash in drawer is greater than the change due
    const output = ordered.reduce((filtered, denom) => {
      console.log({filtered});
      const lookup = {
        'PENNY': 0.01,
        'NICKEL': 0.05,
        'DIME': 0.10,
        'QUARTER': 0.25,
        'ONE': 1,
        'FIVE': 5,
        'TEN': 10,
        'TWENTY': 20,
        'ONE HUNDRED': 100
      }
      const increment = lookup[denom[0]]
      const multiple = Math.floor(denom[1] / increment)
      const changeTracker = filtered[0]

      if (denom[1] < changeTracker) {
        console.log('denom[1] < changeTracker path');
        return filtered.push(increment) // this is not happening
      } else if (denom[1] > filtered[0]) {
        // first, remove lookup[denom[0]] from denom[1]

        return filtered //
      }
    }, [change]).shift() // reduce with an array to map and filter simultaneously. including change and removing it at the end with .shift() makes it hacky, but also makes it pure, and gives us access to an extra, mutable value
    console.log({output});
    return output
  }
}

module.exports = checkCashRegister
