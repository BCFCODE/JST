/* 
  class Circle {
    constructor(radius) {
      this.radius = radius
    }

    draw() {

    }

    // Static method
    static parse(str) {
      const radius = JSON.parse(str).radius
      return new Circle(radius)
    }
  }

  // const circle = new Circle(1)
  const circle = Circle.parse('{"radius": 1}')
  console.log(circle)
*/



function HtmlElement() {
  this.click = function () {
    console.log('clicked')
  }
}

HtmlElement.prototype.focus = function () {
  console.log('focused')
}

function HtmlSelectElement(items = []) {
  this.items = items
  this.addItem = function (item) {
    this.items = [...this.items, item]
  }
  this.removeItem = function(item) {
    this.items = this.items.filter(it => it !== item)
  }
}

HtmlSelectElement.prototype = new HtmlElement()
HtmlSelectElement.prototype.constructor = HtmlSelectElement
console.log(new HtmlSelectElement())
export { HtmlElement, HtmlSelectElement }








/* 
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
      // console.log('move()', this, 'radius >', radius, 'this.radius >', this.radius)
    })
  }

  draw() {
    const move = _move.get(this);
    move()
    // console.log('draw()', 'this.radius >', this.radius)
  }
}

// const c = new Circle(1)
// console.log(c.draw())
 */

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







/* 
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
 */
