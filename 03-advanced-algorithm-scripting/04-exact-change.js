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

const checkCashRegister = (price, cash, cid) => {
  const tid = cid.reduce((a, b) => a + b[1], 0)
  const diff = cash - price
  let change = []

  const denoms = {
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

  if (!cid) { //
    return 'Insufficient Funds'
  } else if (tid === diff) {
    return 'Closed'
  } else {
    // get the biggest value
    const biggest = cid.reduce((a, b) => Math.max(a[1], b[1]) === a[1] ? a : b) // return the sub-array with the largest numeric value
    const multiples = cid.map(denom => denom[1] = Math.floor(denom[1] / denoms[denom[0]])) // for all the cash in the drawer, show how many of each denomination there is, as opposed to its absolute numerical value
    console.log({biggest, multiples, cid, tid});
  }  
}

module.exports = checkCashRegister

// cid.reverse()
//   .forEach((item, index, array) => {
//     if (index === array.length - 1) {
//       return 'Insufficient Funds'
//     } else if (item[1] < diff && item[1] !== 0) {
//       const multiplier = Math.floor(diff / denoms[item[0]]) // how many times can that denomination fit into diff
//       const maxValue = multiplier * denoms[item[0]] < diff ? multiplier * denoms[item[0]] : item[1]
//       console.log({sorted, multiple, target: [item[0], maxValue]});
//       change.push([item[0], maxValue])
//     }
//   })
