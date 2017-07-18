const getShortMessages = messages => {
  return messages
    .map(obj => obj.message) // no block = implicit return
    .filter(message => message.length < 50)
}

module.exports = getShortMessages
