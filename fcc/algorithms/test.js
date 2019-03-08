import updateInventory from './02-inventory-updateInventory'

test('Algorithms - Inventory Update: The function updateInventory should return an array.', () => {
  const actual = updateInventory(
    [
      [21, "Bowling Ball"],
      [2, "Dirty Sock"], [1, "Hair Pin"],
      [5, "Microphone"]
    ],
    [
      [2, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [67, "Bowling Ball"],
      [7, "Toothpaste"]
    ]
  )
  expect(actual).toHaveProperty('length', 6)
})

test('Algorithms - Inventory Update 2', () => {
  const actual = updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])
  const expected = [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]
  expect(actual).toEqual(expected)
})

test('Algorithms - Inventory Update 3', () => {
  const actual = updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [])
  const expected = [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]
  expect(actual).toEqual(expected)
})

test('Algorithms - Inventory Update 4', () => {
  const actual = updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])
  const expected = [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]]
  expect(actual).toEqual(expected)
})

test('Algorithms - Inventory Update 5', () => {
  const actual = updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]])
  const expected = [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]]
  expect(actual).toEqual(expected)
})