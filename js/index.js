const _items = new WeakMap()

class Stack {
  constructor() {
    _items.set(this, [])
  }

  peek() {
    const items = _items.get(this)
    if (items.length === 0) {
      throw new Error('Stack is empty.')
    }
    return items[items.length - 1]
  }

  pop() {
    const items = _items.get(this)
    if (items.length === 0) {
      throw new Error('Stack is empty.')
    }
    return items.pop()
  }

  push(obj) {
    const items = _items.get(this)
    items.push(obj)
  }

  get count() {
    return _items.get(this).length
  }
}

const stack = new Stack()
console.log(`stack`, stack)
console.log(`stack.push('a')`, stack.push('a'))
console.log(`stack.push('b')`, stack.push('b'))
console.log(`stack.push('c')`, stack.push('c'))
console.log(`stack.count`, stack.count)
console.log(`stack.pop()`, stack.pop())
console.log(`stack.count`, stack.count)
console.log(`stack.peek()`, stack.peek())
console.log(`stack.count`, stack.count)
console.log(`stack.pop()`, stack.pop())
console.log(`stack.pop()`, stack.pop())
console.log(`stack.count`, stack.count)
console.log(`stack.pop()`, stack.pop())
console.log(`stack.peek()`, stack.peek())