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
  const tid = cid.reduce((a, b) => a + b[1], 0)
  let diff = cash - price
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
  if (cid.length === 0) { // may need refining
    return 'Insufficient Funds'
  } else if (tid === diff) {
    return 'Closed'
  } else {
    // get the biggest value
    const biggest = cid.reduce((a, b, index) => Math.max(a[1], b[1]) === a[1] ? a : b) // return the sub-array with the largest numeric value - would it ever return more than one value
    let multiple = Math.floor(biggest[1] / denoms[biggest[0]]) // how many of the denomination is in the drawer?
    const bigIndex = cid.indexOf(biggest)
    console.log({biggest, multiple, bigIndex})

    if (biggest[1] > diff) { // if the full amount of the biggest denomination is more than the difference, is multiple greater than one?
      if (multiple > 1) {
        // take away denoms[biggest[0]] 'multiple' times, add that to the change to be returned 'multiple' times
        const subtracted = [cid.slice(bigIndex, 1), cid[bigIndex][1] - (multiple * denoms[biggest[0]])]

        // for a recursive solution, must deal with entire denomination in one swoop, not as below!
        const adjPrice = price - biggest[1]
        const adjCash = cash - biggest[1]

        console.log({subtracted, adjPrice, adjCash});
        // also remove the relevant amount from 'price' and 'cash'
        change.concat([[biggest[0], biggest[1] - denoms[biggest[0]]], checkCashRegister(adjPrice, adjCash, subtracted)]) // not quite right!

      } else { // if multiple is NOT greater than 1
        change.concat([checkCashRegister(price, cash, cid.slice(bigIndex, 1))])// chop off the biggest denomination and try again
      }
    } else {
      // remove biggest from cid and return array with it and checkCashRegister called with the shortened cid in the next place.
    }
  }
    // while (multiple) {
    //   if (diff < 0) {
    //     const bigIndex = cid.findIndex(a => a === biggest)
    //     const subtracted = cid[bigIndex][1] -= denoms[biggest[0]]
    //     return [biggest,...checkCashRegister(cid.splice(bigIndex, 1))] // call the parent function with altered price, cash, cid values
    //   }
    //   diff -= denoms[biggest[0]]
    //   multiple--
    // }

    // subtract the biggest (biggest) denomination in the drawer from the change amount due (diff) multiples times

    // checkCashRegister(newPrice, newCash, newCid)
    console.log({price, cash, cid, change});
    return typeof change[0] === 'string' ? change[0] : change
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
