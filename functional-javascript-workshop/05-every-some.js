const checkUsersValid = goodUsers => {
  return function allUsersValid(submittedUsers) { // allUsersValid checks whether all of submittedUsers exist within goodUsers and returns true if so
    const flattenToProperty = (arr, prop) => { return arr.filter(item => item[prop]) } // filter an array to return only the property specified in parameters (must put the property in quotes because we're accessing it using square bracket notation)
    return flattenToProperty(submittedUsers, 'id').every(id => flattenToProperty(goodUsers, 'id').indexOf(id) > -1 ) // my answer is also probably not very performant
  };
}

module.exports = checkUsersValid

// Model Answer

// module.exports = function checkUsersValid(goodUsers) {
//   return function allUsersValid(submittedUsers) {
//     return submittedUsers.every(function(submittedUser) {
//       return goodUsers.some(function(goodUser) {
//         return goodUser.id === submittedUser.id
//       })
//     })
//   }
// }
