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

function myReplace(str, before, after) {
  const locator = str.split(" ").indexOf(before)
  // check case of both before and after
  // need to iterate through both before and after strings
  // if we were being thoroughly accurate, we would create an array of booleans
  // eg: if before is 'ChEEsy' we would have an array representing the uppercased-ness of before, ie [ true, false, true, true, false, false ]
  // then we would mutate after's case to match that array until one or the other ran out, at which point we'd stop mutating.
  let target = str[locator]

  let capsArray = []

  // bespoke case checker which pushes booleans to an array as described above. param is char but it would work with any string
  const isUpperCase = (char, arr) => {
    char.toUpperCase() !== char ? arr.push(false) : arr.push(true)
  }

  for ( let i = 0; i < target.length; i++ ) {
    isUpperCase(target[i], capsArray)
  }

  let capitalised = []
  const caseMutator = (mutatee, arr) => {
    for (let j = 0; j < mutatee.length; j++) {
      if (arr[j]) {
        capitalised.push(mutatee[j].toUpperCase())
      } else {
        capitalised.push(mutatee[j].toLowerCase())
      } // needs a length checker to avoid running .toLowerCase on nothing
    }
  }

  caseMutator(after.split(""), capsArray)

  // console.log('capitalised before join', capitalised);

  // console.log('caseMutator I', caseMutator(after, capsArray))

  // console.log({before, after, capJoin, capsArray});

  str.splice(locator, 1, capitalised.join(''))

  return str.join(' ');
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
myReplace("Let us go to the store", "store", "mall") // => "Let us go to the mall".
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") // => "He is Sitting on the couch".
myReplace("This has a spellngi error", "spellngi", "spelling") // => "This has a spelling error".
myReplace("His name is Tom", "Tom", "john") // => "His name is John".
myReplace("Let us get back to more Coding", "Coding", "algorithms") // => "Let us get back to more Algorithms".
