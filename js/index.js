const _radius = new WeakMap()
const _move = new WeakMap()
const privateProps = new WeakMap()

export class Circle {
  constructor(radius) {
    privateProps.set(this, {
      radius,
      move: () => {

      }
    })
    _radius.set(this, radius)
    _move.set(this, () => {
      const { radius } = privateProps.get(this)
      this.radius = radius
      console.log('move()', this, 'radius >', radius, 'this.radius >', this.radius)
    })
  }

  draw() {
    const move = _move.get(this);
    move()
    console.log('draw()', 'this.radius >', this.radius)
  }
}

const c = new Circle(1)
console.log(c.draw())


/* 
  class Circle {
    draw() {
      console.log(this)
    }
  }

  const c = new Circle()
  const draw = c.draw
  draw()
*/
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

export class Stack {
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

