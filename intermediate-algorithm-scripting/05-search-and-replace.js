// Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
//
// First argument is the sentence to perform the search and replace on.
//
// Second argument is the word that you will be replacing (before).
//
// Third argument is what you will be replacing the second argument with (after).
//
// Note: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
// Here are some helpful links:
//
// Array.prototype.splice()
// String.prototype.replace()
// Array.prototype.join()

// Working solution for instances of Title Case - identical to beginner model answer

const myReplace = (str, before, after) => {
  if (before[0] === before[0].toUpperCase()) { after = after.charAt(0).toUpperCase() + after.slice(1) }
  return str.replace(before, after)
}

// My longer-winded answer which handles capitalisation of any letter.. but isn't quite working

// const myReplace = (str, before, after) => {
//   const locator = str.split(" ").indexOf(before)
//   // check case of both before and after
//   // need to iterate through both before and after strings
//   // if we were being thoroughly accurate, we would create an array of booleans
//   // eg: if before is 'ChEEsy' we would have an array representing the uppercased-ness of before, ie [ true, false, true, true, false, false ]
//   // then we would mutate after's case to match that array until one or the other ran out, at which point we'd stop mutating.
//   let target = str[locator]
//
//   let capsArray = []
//
//   for ( let i = 0; i < target.length; i++ ) {
//     isUpperCase(target[i], capsArray)
//   }
//
//   let capitalised = []
//   const caseMutator = (mutatee, arr) => {
//     for (let j = 0; j < mutatee.length; j++) {
//       if (arr[j]) {
//         capitalised.push(mutatee[j].toUpperCase())
//       } else {
//         capitalised.push(mutatee[j].toLowerCase())
//       } // needs a length checker to avoid running .toLowerCase on nothing
//     }
//   }
//
//   caseMutator(after.split(""), capsArray)
//
//   str = str.split('').splice(locator, 1, capitalised.join(''))
//
//   return str.join(' ');
// }
//
// const isUpperCase = (char, arr) => {
//   char.toUpperCase() !== char ? arr.push(false) : arr.push(true)
// }

module.exports = myReplace
