// 1.13 - Falsy Bouncer

// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
// Here are some helpful links:
//
// Boolean Objects
// Array.prototype.filter()

const bouncer = arr => arr.filter(item => item)

export default bouncer

// Model Answer - this is a chin-scratcher

// const bouncer = arr => arr.filter(Boolean) // using the Boolean object as a callback for filter means that each item in the array is passed to the Boolean function which itself returns true or false for truthy or falsy values respectively
