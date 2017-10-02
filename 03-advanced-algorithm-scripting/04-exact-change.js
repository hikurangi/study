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
  let change = -(price - cash)
  console.log({
    price,
    cash,
    cid,
    change,
    tid
  });
  if (change === tid) {
    return 'Closed'
  } else if (change > tid) { // gives false positives
    return 'Insufficient Funds'
  } else if (change < tid) {
    // iterate through CID, from largest to smallest
    const sorted = cid.reverse()
    change = []
    // is item[0] less than change due?
    // if so, push one of it to the change array
  }
  return change;
}

module.exports = checkCashRegister
