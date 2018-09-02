// 3 - Advanced Algorithm Scripting

// 3.1 - Validate US Telephone Numbers
import telephoneCheck from './01-validate-us-telephone-numbers';

test('3.1.0 - Validate US Telephone Numbers: telephoneCheck("555-555-5555") should return a boolean', () => {
  const actual = typeof telephoneCheck("555-555-5555")
  const expected = 'boolean'
  expect(actual).toBe(expected)
})

test('3.1.1 - Validate US Telephone Numbers: telephoneCheck("1 555-555-5555") should return true', () => {
  const actual = telephoneCheck("1 555-555-5555")
  const expected = true
  expect(actual).toBe(expected)
})

test('3.1.2 - Validate US Telephone Numbers: telephoneCheck("1 (555) 555-5555") should return true', () => {
  const actual = telephoneCheck("1 (555) 555-5555")
  const expected = true
  expect(actual).toBe(expected)
})

test('3.1.3 - Validate US Telephone Numbers: telephoneCheck("5555555555") should return true', () => {
  const actual = telephoneCheck("5555555555")
  const expected = true
  expect(actual).toBe(expected)
})

test('3.1.4 - Validate US Telephone Numbers: telephoneCheck("555-555-5555") should return true', () => {
  const actual = telephoneCheck("555-555-5555")
  const expected = true
  expect(actual).toBe(expected)
})

test('3.1.5 - Validate US Telephone Numbers: telephoneCheck("(555)555-5555") should return true', () => {
  const actual = telephoneCheck("(555)555-5555")
  const expected = true
  expect(actual).toBe(expected)
})

test('3.1.6 - Validate US Telephone Numbers: telephoneCheck("1(555)555-5555") should return true', () => {
  const actual = telephoneCheck("1(555)555-5555")
  const expected = true
  expect(actual).toBe(expected)
})

test('3.1.7 - Validate US Telephone Numbers: telephoneCheck("555-5555") should return false', () => {
  const actual = telephoneCheck("555-5555")
  const expected = false
  expect(actual).toBe(expected)
})

test('3.1.8 - Validate US Telephone Numbers: telephoneCheck("5555555") should return false', () => {
  const actual = telephoneCheck("5555555")
  const expected = false
  expect(actual).toBe(expected)
})

test('3.1.9 - Validate US Telephone Numbers: telephoneCheck("1 555)555-5555") should return false', () => {
  const actual = telephoneCheck("1 555)555-5555")
  const expected = false
  expect(actual).toBe(expected)
})

test('3.1.10 - Validate US Telephone Numbers: telephoneCheck("1 555 555 5555") should return true', () => {
  const actual = telephoneCheck("1 555 555 5555")
  const expected = true
  expect(actual).toBe(expected)
})

test('3.1.11 - Validate US Telephone Numbers: telephoneCheck("1 456 789 4444") should return true', () => {
  const actual = telephoneCheck("1 456 789 4444")
  const expected = true
  expect(actual).toBe(expected)
})

test('3.1.12 - Validate US Telephone Numbers: telephoneCheck("123**&!!asdf#") should return false', () => {
  const actual = telephoneCheck("123**&!!asdf#")
  const expected = false
  expect(actual).toBe(expected)
})

test('3.1.13 - Validate US Telephone Numbers: telephoneCheck("55555555") should return false', () => {
  const actual = telephoneCheck("55555555")
  const expected = false
  expect(actual).toBe(expected)
})

test('3.1.14 - Validate US Telephone Numbers: telephoneCheck("(6505552368)") should return false', () => {
  const actual = telephoneCheck("(6505552368)")
  const expected = false
  expect(actual).toBe(expected)
})

test('3.1.15 - Validate US Telephone Numbers: telephoneCheck("2 (757) 622-7382") should return false', () => {
  const actual = telephoneCheck("2 (757) 622-7382")
  const expected = false
  expect(actual).toBe(expected)
})

test('3.1.16 - Validate US Telephone Numbers: telephoneCheck("0 (757) 622-7382") should return false', () => {
  const actual = telephoneCheck("0 (757) 622-7382")
  const expected = false
  expect(actual).toBe(expected)
})

test('3.1.17 - Validate US Telephone Numbers: telephoneCheck("0 (757) 622-7382") should return false', () => {
  const actual = telephoneCheck("0 (757) 622-7382")
  const expected = false
  expect(actual).toBe(expected)
})

test('3.1.18 - Validate US Telephone Numbers: telephoneCheck("-1 (757) 622-7382") should return false', () => {
  const actual = telephoneCheck("-1 (757) 622-7382")
  const expected = false
  expect(actual).toBe(expected)
})

test('3.1.19 - Validate US Telephone Numbers: telephoneCheck("2 757 622-7382") should return false', () => {
  const actual = telephoneCheck("2 757 622-7382")
  const expected = false
  expect(actual).toBe(expected)
})

test('3.1.20 - Validate US Telephone Numbers: telephoneCheck("10 (757) 622-7382") should return false', () => {
  const actual = telephoneCheck("10 (757) 622-7382")
  const expected = false
  expect(actual).toBe(expected)
})

test('3.1.21 - Validate US Telephone Numbers: telephoneCheck("27576227382") should return false', () => {
  const actual = telephoneCheck("27576227382")
  const expected = false
  expect(actual).toBe(expected)
})

test('3.1.22 - Validate US Telephone Numbers: telephoneCheck("(275)76227382") should return false', () => {
  const actual = telephoneCheck("(275)76227382")
  const expected = false
  expect(actual).toBe(expected)
})

test('3.1.23 - Validate US Telephone Numbers: telephoneCheck("2(757)6227382") should return false', () => {
  const actual = telephoneCheck("2(757)6227382")
  const expected = false
  expect(actual).toBe(expected)
})

test('3.1.24 - Validate US Telephone Numbers: telephoneCheck("2(757)622-7382") should return false', () => {
  const actual = telephoneCheck("2(757)622-7382")
  const expected = false
  expect(actual).toBe(expected)
})

test('3.1.25 - Validate US Telephone Numbers: telephoneCheck("555)-555-5555") should return false', () => {
  const actual = telephoneCheck("555)-555-5555")
  const expected = false
  expect(actual).toBe(expected)
})

test('3.1.26 - Validate US Telephone Numbers: telephoneCheck("(555-555-5555") should return false', () => {
  const actual = telephoneCheck("(555-555-5555")
  const expected = false
  expect(actual).toBe(expected)
})

test('3.1.27 - Validate US Telephone Numbers: telephoneCheck("(555)5(55?)-5555") should return false', () => {
  const actual = telephoneCheck("(555)5(55?)-5555")
  const expected = false
  expect(actual).toBe(expected)
})

// 3.2 - Record Collection
import updateRecords from './02-record-collection'

test('3.2.0 - After updateRecords(5439, "artist", "ABBA"), the "artist" value on id "5439" should be "ABBA".', () => {
  const called = updateRecords(5439, "artist", "ABBA")
  const actual = called[5439].artist
  const expected = "ABBA"
  expect(actual).toBe(expected)
})

test('3.2.1 - After updateRecords(5439, "tracks", "Take a Chance on Me"), the "tracks" array on id "5439" should have "Take a Chance on Me" as the last element.', () => {
  const called = updateRecords(5439, "tracks", "Take a Chance on Me")
  const actual = called[5439].tracks[called[5439].tracks.length-1]
  const expected = "Take a Chance on Me"
  expect(actual).toBe(expected)
})

test('3.2.2 - After updateRecords(2548, "artist", ""), the "artist" property on id "2548" should be undefined.', () => {
  const called = updateRecords(2548, "artist", "")
  const actual = called[2548].artist
  const expected = undefined
  expect(actual).toBe(expected)
})

test('3.2.3 - After updateRecords(1245, "tracks", "Addicted to Love"), the "tracks" property on id "1245" have "Addicted to Love" as the last element.', () => {
  const called = updateRecords(1245, "tracks", "Addicted to Love")
  const actual = called[1245].tracks[called[1245].tracks.length-1]
  const expected = "Addicted to Love"
  expect(actual).toBe(expected)
})

test('3.2.4 - After updateRecords(2468, "tracks", "Free"), the "tracks" property on id "2468" has "1999" as the first element.', () => {
  const called = updateRecords(2468, "tracks", "Free")
  const actual = called[2468].tracks[0]
  const expected = "1999"
  expect(actual).toBe(expected)
})

test('3.2.5 - After updateRecords(2548, "tracks", ""), the "tracks" property on id "2548" should be undefined.', () => {
  const called = updateRecords(2548, "tracks", "")
  const actual = called[2548].tracks
  const expected = undefined
  expect(actual).toBe(expected)
})

// 3.3 - Symmetric Difference
import sym from './03-symmetric-difference'

test('3.3.0 - sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5].', () => {
  const actual = sym([1, 2, 3], [5, 2, 1, 4])
  const expected = [3, 4, 5]
  expect(actual).toEqual(expected)
})

test('3.3.1 - sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements.', () => {
  const actual = sym([1, 2, 3], [5, 2, 1, 4]).length
  const expected = 3
  expect(actual).toEqual(expected)
})

test('3.3.2 - sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5].', () => {
  const actual = sym([1, 2, 5], [2, 3, 5], [3, 4, 5])
  const expected = [1, 4, 5]
  expect(actual).toEqual(expected)
})

test('3.3.3 - sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should contain only three elements.', () => {
  const actual = sym([1, 2, 5], [2, 3, 5], [3, 4, 5]).length
  const expected = 3
  expect(actual).toEqual(expected)
})

test('3.3.4 - sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].', () => {
  const actual = sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])
  const expected = [1, 4, 5]
  expect(actual).toEqual(expected)
})

test('3.3.5 - sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements.', () => {
  const actual = sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]).length
  const expected = 3
  expect(actual).toEqual(expected)
})

test('3.3.6 - sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7].', () => {
  const actual = sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])
  const expected = [2, 3, 4, 6, 7]
  expect(actual).toEqual(expected)
})

test('3.3.7 - sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements.', () => {
  const actual = sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]).length
  const expected = 5
  expect(actual).toEqual(expected)
})

test('3.3.8 - sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9].', () => {
  const actual = sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])
  const expected = [1, 2, 4, 5, 6, 7, 8, 9]
  expect(actual).toEqual(expected)
})

test('3.3.9 - sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should contain only eight elements.', () => {
  const actual = sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]).length
  const expected = 8
  expect(actual).toEqual(expected)
})

// 3.4 - Exact change
import checkCashRegister from './04-exact-change'

test('3.4.0 - checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return an array.', () => {
  const actual = typeof checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])
  const expected = 'array'
  expect(actual).toEqual(expected)
})

test('3.4.1 - checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return a string.', () => {
  const actual = typeof checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
  const expected = 'string'
  expect(actual).toEqual(expected)
})

test('3.4.2 - checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return a string.', () => {
  const actual = typeof checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
  const expected = 'string'
  expect(actual).toEqual(expected)
})

test('3.4.3 - checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return [["QUARTER", 0.50]].', () => {
  const actual = checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])
  const expected = [["QUARTER", 0.50]]
  expect(actual).toEqual(expect.arrayContaining(expected))
})

test('3.4.4 - checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].', () => {
  const actual = checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])
  const expected = [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]]
  expect(actual).toEqual(expect.arrayContaining(expected))
})

test('3.4.5 - checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Insufficient Funds".', () => {
  const actual = checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
  const expected = "Insufficient Funds"
  expect(actual).toEqual(expected)
})

test('3.4.6 - checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Insufficient Funds".', () => {
  const actual = checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
  const expected = "Insufficient Funds"
  expect(actual).toEqual(expected)
})

test('3.4.7 - checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Closed".', () => {
  const actual = checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
  const expected = "Closed"
  expect(actual).toEqual(expected)
})
