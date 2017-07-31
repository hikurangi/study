// DNA Pairing
// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
//
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
//
// Return the provided character as the first element in each array.
//
// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
//
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
// Here are some helpful links:
//
// Array.prototype.push()
// String.prototype.split()

const pairElement = str => {
  const arr = []
  const matchmaker = strand => {
    let pair
    switch(strand) {
      case 'A':
        pair = 'T'
        break;
      case 'T':
        pair = 'A'
        break;
      case 'C':
        pair = 'G'
        break;
      case 'G':
        pair = 'C'
        break;
      default:
        console.error('Invalid input!');
    }
    return [strand, pair]
  }
  let finisher = str.split('').forEach(item => {
    arr.push(matchmaker(item))
  })
  return arr;
}

module.exports = pairElement
