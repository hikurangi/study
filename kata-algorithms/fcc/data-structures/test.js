import Stack from './03-create-a-stack-class'
import Queue from './04-create-a-queue-class'

test('Data Structures - Your Stack class should have a push method.', () => {
  expect(Stack).toHaveProperty('push')
  expect(typeof Stack.push).toEqual('function')
})

test('Data Structures - Your Stack class should have a pop method.', () => {
  expect(Stack).toHaveProperty('pop')
  expect(typeof Stack.pop).toEqual('function')
})

test('Data Structures - Your Stack class should have a peek method.', () => {
  expect(Stack).toHaveProperty('peek')
  expect(typeof Stack.peek).toEqual('function')
})

test('Data Structures - Your Stack class should have an isEmpty method.', () => {
  expect(Stack).toHaveProperty('isEmpty')
  expect(typeof Stack.isEmpty).toEqual('function')
})

test('Data Structures - Your Stack class should have a clear method.', () => {
  expect(Stack).toHaveProperty('clear')
  expect(typeof Stack.clear).toEqual('function')
})

// The peek method should return the top element of the stack
// The pop method should remove and return the top element of the stack
// The isEmpty method should return true if a stack does not contain any elements
// The clear method should remove all element from the stack


// Your Queue class should have a enqueue method.
// Your Queue class should have a dequeue method.
// Your Queue class should have a front method.
// Your Queue class should have a size method.
// Your Queue class should have an isEmpty method.
// The dequeue method should remove and return the front element of the queue
// The front method should return value of the front element of the queue
// The size method should return the length of the queue
// The isEmpty method should return false if there are elements in the queue