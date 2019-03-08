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
//

const convertHTML = str => {
    const htmlEntities = {
      '&':'&amp;',
      '<':'&lt;',
      '>':'&gt;',
      '\"':'&quot;',
      '\'':"&apos;"
    };
    return str.split('').map(entity => htmlEntities[entity] || entity).join('') // object Lookup
}

// My old basic answer

// const convertHTML = str => {
//   return str
//     .split('')
//     .map(letter => {
//       let regex
//       let replace
//       switch(letter) {
//         case '&':
//           regex = new RegExp(/\&/)
//           replace = '&amp;'
//         break;
//         case '<':
//           regex = new RegExp(/\</)
//           replace = '&lt;'
//         break;
//         case '>':
//           regex = new RegExp(/\>/)
//           replace = '&gt;'
//         break;
//         case '"':
//           regex = new RegExp(/\"/g)
//           replace = '&quot;'
//         break;
//         case '\'':
//           regex = new RegExp(/\'/)
//           replace = '&apos;'
//         break;
//       }
//       return regex ? letter.replace(regex, replace) : letter
//     })
//     .join('')
//   }

// Model Answer - Beginner

// function convertHTML(str) {
//   // Split by character to avoid problems.
//
//   var temp = str.split('');
//
//   // Since we are only checking for a few HTML elements I used a switch
//
//   for (var i = 0; i < temp.length; i++) {
//     switch (temp[i]) {
//       case '<':
//         temp[i] = '&lt;';
//         break;
//       case '&':
//         temp[i] = '&amp;';
//         break;
//       case '>':
//         temp[i] = '&gt;';
//         break;
//       case '"':
//         temp[i] = '&quot;';
//         break;
//       case "'":
//         temp[i] = "&apos;";
//         break;
//     }
//   }
//
//   temp = temp.join('');
//   return temp;
// }

// Model Answer - Intermediate

// function convertHTML(str) {
// //Chaining of replace method with different arguments
//   str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
// return str;
// }

// Model Answer - Advanced

// function convertHTML(str) {
//   // Use Object Lookup to declare as many HTML entities as needed.
//   htmlEntities={
//     '&':'&amp;',
//     '<':'&lt;',
//     '>':'&gt;',
//     '\"':'&quot;',
//     '\'':"&apos;"
//   };
//   //Use map function to return a filtered str with all entities changed automatically.
//   return str.split('').map(function(entity){
//     return htmlEntities[entity] || entity;
//   }).join('');
// }

export default convertHTML
