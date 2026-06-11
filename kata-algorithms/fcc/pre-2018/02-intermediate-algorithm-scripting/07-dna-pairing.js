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
  str.split('').forEach(item => {
    arr.push(matchmaker(item))
  })
  return arr;
}

export default pairElement

// Model Answer - basic
// function pairElement(str) {
//   // Return each strand as an array of two elements, the original and the pair.
//   var paired = [];
//
//   // Function to check with strand to pair.
//   var search = function(char) {
//     switch (char) {
//       case 'A':
//         paired.push(['A', 'T']);
//         break;
//       case 'T':
//         paired.push(['T', 'A']);
//         break;
//       case 'C':
//         paired.push(['C', 'G']);
//         break;
//       case 'G':
//         paired.push(['G', 'C']);
//         break;
//     }
//   };
//
//   // Loops through the input and pair.
//   for (var i = 0; i < str.length; i++) {
//     search(str[i]);
//   }
//
//   return paired;
// }

// Model Answer - Intermediate
// function pairElement(str) {
//   //define a map object with all pair possibilities
//   var map = {T:'A', A:'T', G:'C', C:'G'};
//   //split str into a char Array
//   strArr = str.split('');
//   //replace each Array item with a 2d Array using map
//   for (var i=0;i<strArr.length;i++){
//     strArr[i]=[strArr[i], map[strArr[i]]];
//   }
//  return strArr;
// }
