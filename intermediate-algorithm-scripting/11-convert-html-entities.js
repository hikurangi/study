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

function convertHTML(str) {
  // &colon;&rpar;
  return str;
}

convertHTML("Dolce & Gabbana");

convertHTML("Dolce & Gabbana") // => Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") // => Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve") // => Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"') // => Stuff in &​quot;quotation marks&​quot;.
convertHTML("Shindler's List") // => Shindler&​apos;s List.
convertHTML("<>") // => &​lt;&​gt;.
convertHTML("abc") // => abc.
