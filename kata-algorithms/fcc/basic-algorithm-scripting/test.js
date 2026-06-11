// 12 - Slice and Splice
import frankenSplice from './12-slice-and-splice'

test('Basic Algorithm Scripting - frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5]', () => {
    const actual = frankenSplice([1, 2, 3], [4, 5], 1)
    const expected = [4, 1, 2, 3, 5]
    expect(actual).toEqual(expected)
})

test('Basic Algorithm Scripting - frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"]', () => {
    const actual = frankenSplice([1, 2], ["a", "b"], 1)
    const expected = ["a", 1, 2, "b"]
    expect(actual).toEqual(expected)
})

test('Basic Algorithm Scripting - frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"]', () => {
    const actual = frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)
    const expected = ["head", "shoulders", "claw", "tentacle", "knees", "toes"]
    expect(actual).toEqual(expected)
})

// Covered in first three tests?

// test('All elements from the first array should be added to the second array in their original order.', () => {
// })

// Private internals cannot be tested with Jest

// test('The first array should remain the same after the function runs.', () => {
// })

// test('The second array should remain the same after the function runs.', () => {  
// })
