
import { describe, it, suite, expect, vi } from "vitest";
import { Stack, Circle, HtmlElement, HtmlSelectElement } from ".";

describe('Exercise: Mastering Prototypical Inheritance', () => {
  suite(`\n\tconst e = new HtmlElement()`, () => {
    describe('Validate Prototype Integrity', () => {
      it(`\n\tmust declare its own "click" property`, () => {
        const e = new HtmlElement()
        expect(e.hasOwnProperty('click')).toBe(true)
      })
      it(`\n\tmust inherit "focus" as a prototype method`, () => {
        const e = new HtmlElement()
        expect(Object.getPrototypeOf(e).hasOwnProperty('focus')).toBe(true)
      })
      it(`\n\tHtmlElement's prototype constructor should reference HtmlElement`, () => {
        const e = new HtmlElement()
        expect(Object.getPrototypeOf(e).constructor === HtmlElement).toBe(true)
      })
    })
    it(`\n\te.click() should log "clicked"`, () => {
      const e = new HtmlElement()
      const consoleSpy = vi.spyOn(console, 'log')
      e.click()
      expect(consoleSpy).toHaveBeenCalledWith('clicked')
      consoleSpy.mockRestore()
    })
    it(`\n\te.focus() should log "focused"`, () => {
      const e = new HtmlElement()
      const consoleSpy = vi.spyOn(console, 'log')
      e.focus()
      expect(consoleSpy).toHaveBeenCalledWith('focused')
      consoleSpy.mockRestore()
    })
  })

  suite(`\n\tconst s = new HtmlSelectElement()`, () => {
    describe(`\n\tValidate Own Properties`, () => {
      const s = new HtmlSelectElement()
      const ownPropertyTests = ['addItem', 'items', 'removeItem']
      ownPropertyTests.forEach(propName => {
        it(`\n\tmust declare its own "${propName}" property`, () => {
          expect(s.hasOwnProperty(propName)).toBe(true)
        })
      })
    })

    it(`\n\tthe "items" property should be an array`, () => {
      const s = new HtmlSelectElement()
      expect(Array.isArray(s.items)).toBe(true)
    })

    describe(`\n\taddItem Functionality`, () => {
      it(`\n\tinitially, the items array should be empty`, () => {
        const s = new HtmlSelectElement()
        expect(s.items.length).toBe(0)
      })
      it(`\n\tafter s.addItem(1), items should equal [1]`, () => {
        const s = new HtmlSelectElement()
        s.addItem(1)
        expect(s.items).toEqual([1])
      })
      it(`\n\tafter s.addItem(1) and s.addItem(2), items should equal [1, 2]`, () => {
        const s = new HtmlSelectElement()
        s.addItem(1)
        s.addItem(2)
        expect(s.items).toEqual([1, 2])
      })
      it(`\n\tinvoking s.addItem(1) should return undefined`, () => {
        const s = new HtmlSelectElement()
        expect(s.addItem(1)).toBeUndefined()
      })
    })

    describe(`\n\tremoveItem Functionality`, () => {
      it(`\n\tafter adding 1 and 2, then removing 1, items should equal [2]`, () => {
        const s = new HtmlSelectElement()
        s.addItem(1)
        s.addItem(2)
        s.removeItem(1)
        expect(s.items).toEqual([2])
      })
      it(`\n\tinvoking s.removeItem(1) should return undefined`, () => {
        const s = new HtmlSelectElement()
        expect(s.removeItem(1)).toBeUndefined()
      })
    })

    describe(`\n\tValidate Prototype Chain`, () => {
      const s = new HtmlSelectElement()
      const HtmlSelectElementPrototype = Object.getPrototypeOf(s)
      it(`\n\tHtmlSelectElement's prototype must declare its own "click" property`, () => {
        expect(Object.getPrototypeOf(s).hasOwnProperty('click')).toBe(true)
      })
      it(`\n\tits prototype must include "focus" as a method`, () => {
        expect(Object.getPrototypeOf(HtmlSelectElementPrototype).hasOwnProperty('focus')).toBe(true)
      })
      it(`\n\tthe constructor property of HtmlSelectElement's prototype should reference HtmlSelectElement`, () => {
        expect(Object.getPrototypeOf(s).constructor === HtmlSelectElement).toBe(true)
      })
      it(`\n\tthe parent prototype's constructor should reference HtmlElement`, () => {
        expect(Object.getPrototypeOf(HtmlSelectElementPrototype).constructor === HtmlElement).toBe(true)
      })
    })
  })
})

/* 
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
*/
/* 
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

 */