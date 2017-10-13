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
    return ordered.reduce((filtered, denom) => filtered.push(denom), []) // reduce with an array to map and filter simultaneously
  }
}

module.exports = checkCashRegister
