// Model answer - ES6 refactor - the names are unnecessary

module.exports = checkUsersValid = goodUsers => { // can remove 'checkUsersValid = '
  return allUsersValid = submittedUsers => { // can remove 'allUsersValid = '
    return submittedUsers.every(submittedUser => goodUsers.some(goodUser => goodUser.id === submittedUser.id)) // that implicit return though
  }
}

// My rule-breaking answer - uses a helper function!

// const checkUsersValid = goodUsers => {
//   return function allUsersValid(submittedUsers) { // allUsersValid checks whether all of submittedUsers exist within goodUsers and returns true if so
//     const flattenToProperty = (arr, prop) => { return arr.filter(item => item[prop]) } // filter an array to return only the property specified in parameters (must put the property in quotes because we're accessing it using square bracket notation)
//     return flattenToProperty(submittedUsers, 'id').every(id => flattenToProperty(goodUsers, 'id').indexOf(id) > -1 ) // my answer is also probably not very performant.
//   };
// }

// Model Answer

module.exports = function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(submittedUser) { // check every user id in submittedUser
      return goodUsers.some(function(goodUser) {
        return goodUser.id === submittedUser.id // does the specified submittedUser.id match any of the goodUsers' ids? Any false value will spit out a false value for allUsersValid.
      })
    })
  }
