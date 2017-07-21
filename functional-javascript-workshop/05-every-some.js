const checkUsersValid = goodUsers => {
  return function allUsersValid(submittedUsers) { // allUsersValid checks whether all of submittedUsers exist within goodUsers and returns true if so
    const idsOnly = arr => {return arr.filter(item => item.id)} // filter an array to return only ids
    return idsOnly(submittedUsers).every(id => idsOnly(goodUsers).indexOf(id) > -1 )
  };
}

module.exports = checkUsersValid
