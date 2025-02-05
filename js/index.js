class Circle {
  draw() {
    console.log(this)
  }
}

const c = new Circle()
const draw = c.draw
draw()

/* 
  'use strict'

  const Circle = function () {
    this.draw = function () {
      console.log(this)
    }
  } 

  const c = new Circle()
  // Method Call
  c.draw()

  // Function Call
  const draw = c.draw
  draw()
*/








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

export default Stack