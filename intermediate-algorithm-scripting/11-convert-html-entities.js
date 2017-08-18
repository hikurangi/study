// Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
// Here are some helpful links:
//
// RegExp
// HTML Entities
// String.prototype.replace()

const convertHTML = str => {
  return str
    .split('')
    .map(letter => {
      let regex
      let replace
      switch(letter) {
        case '&':
          regex = new RegExp(/\&/)
          replace = '&amp;'
        break;
      }
      return letter.replace(regex, replace)
    })
    .join('')
  }

module.exports = convertHTML
