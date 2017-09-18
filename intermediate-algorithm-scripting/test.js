// 2.1 - Sum All Numbers
import sumAll from './01-sum-all-numbers.js';

test('2.1.0 - Sum All Numbers: sumAll([1, 4]) returns a number', () => {
  const actual = !isNaN(sumAll([1, 4]))
  const expected = true
  expect(actual).toBe(expected)
})

test('2.1.1 - Sum All Numbers: sumAll([1, 4]) returns 10', () => {
  const actual = sumAll([1, 4])
  const expected = 10
  expect(actual).toBe(expected)
})

test('2.1.2 - Sum All Numbers: sumAll([4, 1]) returns 10', () => {
  const actual = sumAll([4, 1])
  const expected = 10
  expect(actual).toBe(expected)
})

test('2.1.3 - Sum All Numbers: sumAll([5, 10]) returns 45', () => {
  const actual = sumAll([5, 10])
  const expected = 45
  expect(actual).toBe(expected)
})

test('2.1.4 - Sum All Numbers: sumAll([10, 5]) returns 45', async () => {
  const actual = sumAll([10, 5])
  const expected = 45
  expect(actual).toBe(expected)
})

// 2.2 - Diff Two Arrays
import diffArray from './02-diff-two-arrays.js'

test('2.2.0 - Diff Two Arrays: diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) returns [4]', () => {
  const actual = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])
  const expected = [4]
  expect(actual).toEqual(expect.arrayContaining(expected))
})

test('2.2.1 - Diff Two Arrays: diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) returns ["pink wool"]', () => {
  const actual =  diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])
  const expected = ["pink wool"]
  expect(actual).toEqual(expect.arrayContaining(expected))
})

test('2.2.2 - Diff Two Arrays: diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) returns ["diorite", "pink wool"]', () => {
  const actual =  diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])
  const expected = ["diorite", "pink wool"]
  expect(actual).toEqual(expect.arrayContaining(expected))
})

test('2.2.3 - Diff Two Arrays: diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]) returns ["diorite", "pink wool"]', () => {
  const actual =  diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])
  const expected = []
  expect(actual).toEqual(expect.arrayContaining(expected))
})

test('2.2.4 - Diff Two Arrays: diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]) returns ["piglet", 4]', () => {
  const actual =  diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])
  const expected = ["piglet", 4]
  expect(actual).toEqual(expect.arrayContaining(expected))
})

test('2.2.5 - Diff Two Arrays: diffArray([], ["snuffleupagus", "cookie monster", "elmo"]) returns ["diorite", "pink wool"]', () => {
  const actual =  diffArray([], ["snuffleupagus", "cookie monster", "elmo"])
  const expected = ["snuffleupagus", "cookie monster", "elmo"]
  expect(actual).toEqual(expect.arrayContaining(expected))
})

test('2.2.6 - Diff Two Arrays: diffArray([1, "calf", 3, "piglet"], [7, "filly"]) returns [1, "calf", 3, "piglet", 7, "filly"]', () => {
  const actual =  diffArray([1, "calf", 3, "piglet"], [7, "filly"])
  const expected = [1, "calf", 3, "piglet", 7, "filly"]
  expect(actual).toEqual(expect.arrayContaining(expected))
})

// 2.3 Roman Numeral Converter
import convertToRoman from './03-roman-numeral-converter'

test('2.3.0 - convertToRoman(2) should return "II".', () => {
  const actual = convertToRoman(2)
  const expected = 'II'
  expect(actual).toEqual(expected)
})

test('2.3.1 - convertToRoman(3) should return "III".', () => {
  const actual = convertToRoman(3)
  const expected = 'III'
  expect(actual).toEqual(expected)
})

test('2.3.2 - convertToRoman(4) should return "IV".', () => {
  const actual = convertToRoman(4)
  const expected = 'IV'
  expect(actual).toEqual(expected)
})

test('2.3.3 - convertToRoman(5) should return "V".', () => {
  const actual = convertToRoman(5)
  const expected = 'V'
  expect(actual).toEqual(expected)
})

test('2.3.4 - convertToRoman(9) should return "IX".', () => {
  const actual = convertToRoman(9)
  const expected = 'IX'
  expect(actual).toEqual(expected)
})

test('2.3.5 - convertToRoman(12) should return "XII".', () => {
  const actual = convertToRoman(12)
  const expected = 'XII'
  expect(actual).toEqual(expected)
})

test('2.3.6 - convertToRoman(16) should return "XVI".', () => {
  const actual = convertToRoman(16)
  const expected = 'XVI'
  expect(actual).toEqual(expected)
})

test('2.3.7 - convertToRoman(29) should return "XXIX".', () => {
  const actual = convertToRoman(29)
  const expected = 'XXIX'
  expect(actual).toEqual(expected)
})

test('2.3.8 - convertToRoman(44) should return "XLIV".', () => {
  const actual = convertToRoman(44)
  const expected = 'XLIV'
  expect(actual).toEqual(expected)
})

test('2.3.9 - convertToRoman(45) should return "XLV".', () => {
  const actual = convertToRoman(45)
  const expected = 'XLV'
  expect(actual).toEqual(expected)
})

test('2.3.10 - convertToRoman(68) should return "LXVIII".', () => {
  const actual = convertToRoman(68)
  const expected = 'LXVIII'
  expect(actual).toEqual(expected)
})

test('2.3.11 - convertToRoman(83) should return "LXXXIII".', () => {
  const actual = convertToRoman(83)
  const expected = 'LXXXIII'
  expect(actual).toEqual(expected)
})

test('2.3.12 - convertToRoman(97) should return "XCVII".', () => {
  const actual = convertToRoman(97)
  const expected = 'XCVII'
  expect(actual).toEqual(expected)
})

test('2.3.13 - convertToRoman(99) should return "XCIX".', () => {
  const actual = convertToRoman(99)
  const expected = 'XCIX'
  expect(actual).toEqual(expected)
})

test('2.3.14 - convertToRoman(500) should return "D".', () => {
  const actual = convertToRoman(500)
  const expected = 'D'
  expect(actual).toEqual(expected)
})

test('2.3.15 - convertToRoman(501) should return "DI".', () => {
  const actual = convertToRoman(501)
  const expected = 'DI'
  expect(actual).toEqual(expected)
})

test('2.3.16 - convertToRoman(649) should return "DCXLIX".', () => {
  const actual = convertToRoman(649)
  const expected = 'DCXLIX'
  expect(actual).toEqual(expected)
})

test('2.3.17 - convertToRoman(798) should return "DCCXCVIII".', () => {
  const actual = convertToRoman(798)
  const expected = 'DCCXCVIII'
  expect(actual).toEqual(expected)
})

test('2.3.18 - convertToRoman(891) should return "DCCCXCI".', () => {
  const actual = convertToRoman(891)
  const expected = 'DCCCXCI'
  expect(actual).toEqual(expected)
})

test('2.3.19 - convertToRoman(1000) should return "M".', () => {
  const actual = convertToRoman(1000)
  const expected = 'M'
  expect(actual).toEqual(expected)
})

test('2.3.20 - convertToRoman(1004) should return "MIV".', () => {
  const actual = convertToRoman(1004)
  const expected = 'MIV'
  expect(actual).toEqual(expected)
})

test('2.3.21 - convertToRoman(1006) should return "MVI".', () => {
  const actual = convertToRoman(1006)
  const expected = 'MVI'
  expect(actual).toEqual(expected)
})

test('2.3.22 - convertToRoman(1023) should return "MXXIII".', () => {
  const actual = convertToRoman(1023)
  const expected = 'MXXIII'
  expect(actual).toEqual(expected)
})

test('2.3.23 - convertToRoman(2014) should return "MMXIV".', () => {
  const actual = convertToRoman(2014)
  const expected = 'MMXIV'
  expect(actual).toEqual(expected)
})

test('2.3.24 - convertToRoman(3999) should return "MMMCMXCIX".', () => {
  const actual = convertToRoman(3999)
  const expected = 'MMMCMXCIX'
  expect(actual).toEqual(expected)
})

// 2.5 - Search And Replace
import myReplace from './05-search-and-replace'

test('2.5.0 - Search And Replace: myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped") returns "A quick brown fox leaped over the lazy dog"', async () => {
  const actual = myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
  const expected = "A quick brown fox leaped over the lazy dog"
  expect(actual).toBe(expected)
})

test('2.5.1 - Search And Replace: myReplace("Let us go to the store", "jumped", "leaped") returns "Let us go to the mall"', async () => {
  const actual = myReplace("Let us go to the store", "store", "mall")
  const expected = "Let us go to the mall"
  expect(actual).toBe(expected)
})

test('2.5.2 - Search And Replace: myReplace("He is Sleeping on the couch", "Sleeping", "sitting") returns "He is Sitting on the couch"', async () => {
  const actual = myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
  const expected = "He is Sitting on the couch"
  expect(actual).toBe(expected)
})

test('2.5.3 - Search And Replace: myReplace("This has a spellngi error", "spellngi", "spelling") returns "This has a spelling error"', async () => {
  const actual = myReplace("This has a spellngi error", "spellngi", "spelling")
  const expected = "This has a spelling error"
  expect(actual).toBe(expected)
})

test('2.5.4 - Search And Replace: myReplace("His name is Tom", "Tom", "john") returns "His name is John"', async () => {
  const actual = myReplace("His name is Tom", "Tom", "john")
  const expected = "His name is John"
  expect(actual).toBe(expected)
})

test('2.5.4 - Search And Replace: myReplace("Let us get back to more Coding", "Coding", "algorithms") returns "Let us get back to more Algorithms"', async () => {
  const actual = myReplace("Let us get back to more Coding", "Coding", "algorithms")
  const expected = "Let us get back to more Algorithms"
  expect(actual).toBe(expected)
})

// 2.6 - Pig Latin Translator
import translatePigLatin from './06-pig-latin'

test('2.6.0 - Pig Latin: translatePigLatin("consonant") returns "onsonantcay"', async () => {
  const actual = translatePigLatin("consonant")
  const expected = "onsonantcay"
  expect(actual).toBe(expected)
})

test('2.6.1 - Pig Latin: translatePigLatin("california") returns "aliforniacay"', async () => {
  const actual = translatePigLatin("california")
  const expected = "aliforniacay"
  expect(actual).toBe(expected)
})

test('2.6.2 - Pig Latin: translatePigLatin("paragraphs") returns "aragraphspay"', async () => {
  const actual = translatePigLatin("paragraphs")
  const expected = "aragraphspay"
  expect(actual).toBe(expected)
})

test('2.6.3 - Pig Latin: translatePigLatin("glove") returns "oveglay"', async () => {
  const actual = translatePigLatin("glove")
  const expected = "oveglay"
  expect(actual).toBe(expected)
})

test('2.6.4 - Pig Latin: translatePigLatin("algorithm") returns "algorithmway"', async () => {
  const actual = translatePigLatin("algorithm")
  const expected = "algorithmway"
  expect(actual).toBe(expected)
})

test('2.6.5 - Pig Latin: translatePigLatin("eight") returns "eightway"', async () => {
  const actual = translatePigLatin("eight")
  const expected = "eightway"
  expect(actual).toBe(expected)
})

// 2.7 - DNA Pairing
import pairElement from './07-dna-pairing'

test('2.7.0 - DNA Pairing: pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].', () => {
  const actual =  pairElement("ATCGA")
  const expected = [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
  expect(actual).toEqual(expect.arrayContaining(expected))
})

test('2.7.1 - DNA Pairing: pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].', () => {
  const actual =  pairElement("TTGAG")
  const expected = [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
  expect(actual).toEqual(expect.arrayContaining(expected))
})

test('2.7.2 - DNA Pairing: pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].', () => {
  const actual =  pairElement("CTCTA")
  const expected = [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]
  expect(actual).toEqual(expect.arrayContaining(expected))
})

// 2.8 - Missing Letters
import fearNotLetter from './08-missing-letters'

test('2.8.0 - Missing Letters: fearNotLetter("abce") should return "d".', () => {
  const actual =  fearNotLetter("abce")
  const expected = "d"
  expect(actual).toEqual(expected)
})

test('2.8.1 - Missing Letters: fearNotLetter("abcdefghjklmno") should return "i".', () => {
  const actual =  fearNotLetter("abcdefghjklmno")
  const expected = "i"
  expect(actual).toEqual(expected)
})

test('2.8.2 - Missing Letters: fearNotLetter("bcd") should return undefined.', () => {
  const actual =  fearNotLetter("bcd")
  const expected = undefined
  expect(actual).toEqual(expected)
})

test('2.8.3 - Missing Letters: fearNotLetter("yz") should return undefined.', () => {
  const actual =  fearNotLetter("yz")
  const expected = undefined
  expect(actual).toEqual(expected)
})

// 2.9 - Boo Who
import booWho from './09-boo-who'

test('2.9.0 - Boo Who: booWho(true) should return true.', () => {
  const actual =  booWho(true)
  const expected = true
  expect(actual).toBe(expected)
})

test('2.9.1 - Boo Who: booWho(false) should return true.', () => {
  const actual =  booWho(false)
  const expected = true
  expect(actual).toBe(expected)
})

test('2.9.2 - Boo Who: booWho([1, 2, 3]) should return false.', () => {
  const actual =  booWho([1, 2, 3])
  const expected = false
  expect(actual).toBe(expected)
})

test('2.9.3 - Boo Who: booWho([].slice) should return false.', () => {
  const actual =  booWho([].slice)
  const expected = false
  expect(actual).toBe(expected)
})

test('2.9.4 - Boo Who: booWho({ "a": 1 }) should return false.', () => {
  const actual =  booWho({ "a": 1 })
  const expected = false
  expect(actual).toBe(expected)
})

test('2.9.5 - Boo Who: booWho(1) should return false.', () => {
  const actual =  booWho(1)
  const expected = false
  expect(actual).toBe(expected)
})

test('2.9.6 - Boo Who: booWho(NaN) should return false.', () => {
  const actual =  booWho(NaN)
  const expected = false
  expect(actual).toBe(expected)
})

test('2.9.7 - Boo Who: booWho("a") should return false.', () => {
  const actual =  booWho("a")
  const expected = false
  expect(actual).toBe(expected)
})

test('2.9.8 - Boo Who: booWho("true") should return false.', () => {
  const actual =  booWho("true")
  const expected = false
  expect(actual).toBe(expected)
})

test('2.9.9 - Boo Who: booWho("false") should return false.', () => {
  const actual =  booWho("false")
  const expected = false
  expect(actual).toBe(expected)
})

// 2.10 - Sorted Union
import uniteUnique from './10-sorted-union'

test('2.10.0 - uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].', () => {
  const actual =  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
  const expected = [1, 3, 2, 5, 4]
  expect(actual).toEqual(expected)
})

test('2.10.1 - uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].', () => {
  const actual =  uniteUnique([1, 3, 2], [1, [5]], [2, [4]])
  const expected = [1, 3, 2, [5], [4]]
  expect(actual).toEqual(expected)
})

test('2.10.2 - uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].', () => {
  const actual =  uniteUnique([1, 2, 3], [5, 2, 1])
  const expected = [1, 2, 3, 5]
  expect(actual).toEqual(expected)
})

test('2.10.3 - uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].', () => {
  const actual =  uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])
  const expected = [1, 2, 3, 5, 4, 6, 7, 8]
  expect(actual).toEqual(expected)
})

// 2.11 - Convert HTML Entities
import convertHTML from './11-convert-html-entities'

test('2.11.0 - convertHTML("Dolce & Gabbana") should return "Dolce &amp; Gabbana".', () => {
  const actual =  convertHTML("Dolce & Gabbana")
  const expected = 'Dolce &amp; Gabbana'
  expect(actual).toEqual(expected)
})

test('2.11.1 - convertHTML("Hamburgers < Pizza < Tacos") should return "Hamburgers &lt; Pizza &lt; Tacos".', () => {
  const actual =  convertHTML("Hamburgers < Pizza < Tacos")
  const expected = "Hamburgers &lt; Pizza &lt; Tacos"
  expect(actual).toEqual(expected)
})

test('2.11.2 - convertHTML("Sixty > twelve") should return "Sixty &gt; twelve".', () => {
  const actual =  convertHTML("Sixty > twelve")
  const expected = 'Sixty &gt; twelve'
  expect(actual).toEqual(expected)
})

test('2.11.3 - convertHTML(\'Stuff in "quotation marks"\') should return "Stuff in &quot;quotation marks&quot;".', () => {
  const actual =  convertHTML('Stuff in "quotation marks"')
  const expected = 'Stuff in &quot;quotation marks&quot;'
  expect(actual).toEqual(expected)
})

test('2.11.4 - convertHTML("Shindler\'s List") should return "Shindler&apos;s List".', () => {
  const actual =  convertHTML("Shindler's List")
  const expected = 'Shindler&apos;s List'
  expect(actual).toEqual(expected)
})

test('2.11.5 - convertHTML("<>") should return "&lt;&gt";.', () => {
  const actual =  convertHTML("<>")
  const expected = '&lt;&gt;'
  expect(actual).toEqual(expected)
})

test('2.11.6 - convertHTML("abc") should return "abc".', () => {
  const actual =  convertHTML("abc")
  const expected = 'abc'
  expect(actual).toEqual(expected)
})

// 2.12 - Spinal Tap Case
import spinalCase from './12-spinal-tap-case'

test('2.12.0 - spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".', () => {
  const actual =  spinalCase("This Is Spinal Tap")
  const expected = 'this-is-spinal-tap'
  expect(actual).toEqual(expected)
})

test('2.12.1 - spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".', () => {
  const actual =  spinalCase("thisIsSpinalTap")
  const expected = 'this-is-spinal-tap'
  expect(actual).toEqual(expected)
})

test('2.12.2 - spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".', () => {
  const actual =  spinalCase("The_Andy_Griffith_Show")
  const expected = 'the-andy-griffith-show'
  expect(actual).toEqual(expected)
})

test('2.12.3 - spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".', () => {
  const actual =  spinalCase("Teletubbies say Eh-oh")
  const expected = 'teletubbies-say-eh-oh'
  expect(actual).toEqual(expected)
})

test('2.12.4 - spinalCase("AllThe-small Things") should return "all-the-small-things".', () => {
  const actual =  spinalCase("AllThe-small Things")
  const expected = 'all-the-small-things'
  expect(actual).toEqual(expected)
})

// 2.13 - Sum All Odd Fibonacci Numbers
import sumFibs from './13-sum-all-odd-fibonacci-numbers'

test('2.13.0 - sumFibs(1) should return a number.', () => {
  const actual = typeof sumFibs(1)
  const expected = 'number'
  expect(actual).toEqual(expected)
})

test('2.13.1 - sumFibs(1000) should return 1785.', () => {
  const actual = sumFibs(1000)
  const expected = 1785
  expect(actual).toEqual(expected)
})

test('2.13.2 - sumFibs(4000000) should return 4613732.', () => {
  const actual = sumFibs(4000000)
  const expected = 4613732
  expect(actual).toEqual(expected)
})

test('2.13.3 - sumFibs(4) should return 5.', () => {
  const actual = sumFibs(4)
  const expected = 5
  expect(actual).toEqual(expected)
})

test('2.13.4 - sumFibs(75024) should return 60696.', () => {
  const actual = sumFibs(75024)
  const expected = 60696
  expect(actual).toEqual(expected)
})

test('2.13.5 - sumFibs(75025) should return 135721.', () => {
  const actual = sumFibs(75025)
  const expected = 135721
  expect(actual).toEqual(expected)
})

// 2.14 - Sum All Primes
import sumPrimes from './14-sum-all-primes'

test('2.14.0 - sumPrimes(10) should return a number.', () => {
  const actual = typeof sumPrimes(10)
  const expected = 'number'
  expect(actual).toEqual(expected)
})

test('2.14.1 - sumPrimes(10) should return 17.', () => {
  const actual = sumPrimes(10)
  const expected = 17
  expect(actual).toEqual(expected)
})

test('2.14.2 - sumPrimes(977) should return 73156.', () => {
  const actual = sumPrimes(977)
  const expected = 73156
  expect(actual).toEqual(expected)
})

// 2.15 - Smallest Common Multiple
import smallestCommons from './15-smallest-common-multiple'

test('2.15.0 - smallestCommons([1, 5]) should return a number.', () => {
  const actual = typeof smallestCommons([1, 5])
  const expected = 'number'
  expect(actual).toEqual(expected)
})

test('2.15.1 - smallestCommons([1, 5]) should return 60.', () => {
  const actual = smallestCommons([1, 5])
  const expected = 60
  expect(actual).toEqual(expected)
})

test('2.15.2 - smallestCommons([5, 1]) should return 60.', () => {
  const actual = smallestCommons([5, 1])
  const expected = 60
  expect(actual).toEqual(expected)
})

test('2.15.3 - smallestCommons([1, 13]) should return 360360.', () => {
  const actual = smallestCommons([1, 13])
  const expected = 360360
  expect(actual).toEqual(expected)
})

test('2.15.4 - smallestCommons([23, 18]) should return 6056820.', () => {
  const actual = smallestCommons([23, 18])
  const expected = 6056820
  expect(actual).toEqual(expected)
})

// 2.16 - Finders Keepers
import findElement from './16-finders-keepers'

test('2.16.0 - findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.', () => {
  const actual = findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })
  const expected = 8
  expect(actual).toEqual(expected)
})

test('2.16.1 - findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.', () => {
  const actual = findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })
  const expected = undefined
  expect(actual).toEqual(expected)
})

// 2.17 - Drop It
import dropElements from './17-drop-it'

test('2.17.0 - dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].', () => {
  const actual = dropElements([1, 2, 3, 4], function(n) {return n >= 3;})
  const expected = [3, 4]
  expect(actual).toEqual(expect.arrayContaining(expected))
})

test('2.17.1 - dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].', () => {
  const actual = dropElements([0, 1, 0, 1], function(n) {return n === 1;})
  const expected = [1, 0, 1]
  expect(actual).toEqual(expect.arrayContaining(expected))
})

test('2.17.2 - dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].', () => {
  const actual = dropElements([1, 2, 3], function(n) {return n > 0;})
  const expected = [1, 2, 3]
  expect(actual).toEqual(expect.arrayContaining(expected))
})

test('2.17.3 - dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].', () => {
  const actual = dropElements([1, 2, 3, 4], function(n) {return n > 5;})
  const expected = []
  expect(actual).toEqual(expect.arrayContaining(expected))
})

test('2.17.4 - dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].', () => {
  const actual = dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})
  const expected = [7, 4]
  expect(actual).toEqual(expect.arrayContaining(expected))
})

test('2.17.5 - dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].', () => {
  const actual = dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})
  const expected = [3, 9, 2]
  expect(actual).toEqual(expect.arrayContaining(expected))
})

// 2.18 - Steamroller
import steamrollArray from './18-steamroller'

test('2.18.0 - steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].', () => {
  const actual = steamrollArray([[["a"]], [["b"]]])
  const expected = ["a", "b"]
  expect(actual).toEqual(expect.arrayContaining(expected))
})

test('2.18.1 - steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].', () => {
  const actual = steamrollArray([1, [2], [3, [[4]]]])
  const expected = [1, 2, 3, 4]
  expect(actual).toEqual(expect.arrayContaining(expected))
})

test('2.18.2 - steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].', () => {
  const actual = steamrollArray([1, [], [3, [[4]]]])
  const expected = [1, 3, 4]
  expect(actual).toEqual(expect.arrayContaining(expected))
})

test('2.18.3 - steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].', () => {
  const actual = steamrollArray([1, {}, [3, [[4]]]])
  const expected = [1, {}, 3, 4]
  expect(actual).toEqual(expect.arrayContaining(expected))
})
