// Algorithms: Inventory Update

// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
// Update the current existing inventory item quantities (in arr1).
// If an item cannot be found, add the new item and quantity into the inventory array.
// The returned inventory array should be in alphabetical order by item.

const updateInventory = (arr1, arr2) => {
  for (let i = 0; i < arr2.length; i++) {
    const updateItem = arr2[i]
    const updateCount = updateItem[0]
    const updateName = updateItem[1]
    
    const updateIndex = arr1.findIndex(existingItem => existingItem[1] === updateName)
    
    updateIndex > -1 // if the updated item is already in the inventory
      ? arr1[updateIndex][0] += updateCount // update their total
      : arr1.push(updateItem) // otherwise add these items as new
  }

  const sorted = arr1.sort((a, b) => {
    const name1 = a[1]
    const name2 = b[1]
    if (name1 < name2) { return -1 }
    if (name1 > name2) { return 1 }
    return 0
  })

  return sorted
}

export default updateInventory