
import { describe, it } from "vitest";
import { expect } from "vitest";
import {Stack, Circle} from ".";

describe(`Stack`, () => {
  it(`Test 1\n\tstack.push('a'); \n\tstack.push('b'); \n\tstack.push('c'); \n\t stack.count; >> 3`, () => {
    const stack = new Stack()
    stack.push('a')
    stack.push('b')
    stack.push('c')
    const result = stack.count
    expect(result).toBe(3)
  })
  it(`Test 2\n\tstack.push('a'); \n\tstack.push('b'); \n\tstack.push('c'); \n\tstack.pop() \n\t stack.count; >> 3`, () => {
    const stack = new Stack()
    stack.push('a')
    stack.push('b')
    stack.push('c')
    stack.pop()
    const result = stack.count
    expect(result).toBe(2)
  })
  it(`Test 3\n\tstack.push('a'); \n\tstack.push('b'); \n\tstack.push('c'); \n\tstack.pop() \n\t stack.peek(); >> 3`, () => {
    const stack = new Stack()
    stack.push('a')
    stack.push('b')
    stack.push('c')
    stack.pop()
    const result = stack.peek()
    expect(result).toBe('b')
  })
  it(`Test 4\n\tstack.push('a'); \n\tstack.push('b'); \n\tstack.push('c'); \n\tstack.pop() \n\t stack.peek(); \n\t stack.count >> 2`, () => {
    const stack = new Stack()
    stack.push('a')
    stack.push('b')
    stack.push('c')
    stack.pop()
    stack.peek()
    const result = stack.count
    expect(result).toBe(2)
  })
  it(`Test 5\n\tstack.push('a'); \n\tstack.push('b'); \n\tstack.push('c'); \n\tstack.pop() \n\t stack.peek(); \n\tstack.pop() \n\tstack.pop() \n\t stack.count >> 0`, () => {
    const stack = new Stack()
    stack.push('a')
    stack.push('b')
    stack.push('c')
    stack.pop()
    stack.peek()
    stack.pop()
    stack.pop()
    const result = stack.count
    expect(result).toBe(0)
  })
  it(`Test 6\n\tstack.push('a'); \n\tstack.push('b'); \n\tstack.push('c'); \n\tstack.pop() \n\t stack.peek(); \n\tstack.pop() \n\tstack.pop() \n\t stack.pop() >> Error: Stack is empty.`, () => {
    const stack = new Stack()
    stack.push('a')
    stack.push('b')
    stack.push('c')
    stack.pop()
    stack.peek()
    stack.pop()
    stack.pop()
    const result = () => { stack.pop() }
    expect(result).toThrowError('Stack is empty.')
  })
  it(`Test 7\n\tstack.push('a'); \n\tstack.push('b'); \n\tstack.push('c'); \n\tstack.pop() \n\t stack.peek(); \n\tstack.pop() \n\tstack.pop() \n\t stack.pop() \n\t stack.peek(); >> Error: Stack is empty.`, () => {
    const stack = new Stack()
    stack.push('a')
    stack.push('b')
    stack.push('c')
    stack.pop()
    stack.peek()
    stack.pop()
    stack.pop()
    const result = () => { stack.pop() }
    expect(result).toThrowError('Stack is empty.')
  })
 
})


describe(`Private Members Using WeakMaps`, () => {
  it(`\n\tconst c = new Circle(1)\n\tc._radius >> undefined`, () => {
    const c = new Circle(1)
    const result = c._radius
    expect(result).toBeUndefined()
  })
  it(`\n\tconst c = new Circle(1)\n\tc._move >> undefined`, () => {
    const c = new Circle(1)
    const result = c._move
    expect(result).toBeUndefined()
  })
  it(`\n\tconst c = new Circle(1)\n\tc.privateProps >> undefined`, () => {
    const c = new Circle(1)
    const result = c.privateProps
    expect(result).toBeUndefined()
  })
  it(`\n\tconst c = new Circle(1)\n\tc.privateProps.radius >> undefined`, () => {
    const c = new Circle(1)
    const result = c.privateProps?.radius
    expect(result).toBeUndefined()
  })
  it(`\n\tconst c = new Circle(1)\n\tc.privateProps.move >> undefined`, () => {
    const c = new Circle(1)
    const result = c.privateProps?.move
    expect(result).toBeUndefined()
  })
  it(`\n\tconst c = new Circle(1)\n\tc.radius >> undefined`, () => {
    const c = new Circle(1)
    const result = c.radius
    expect(result).toBeUndefined()
  })
})