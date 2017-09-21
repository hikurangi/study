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
