import { LinkedList, Node } from "./LinkedList";
import { describe, it, expect } from "vitest";
export const J = (value) => JSON.stringify(value)

describe(`LinkedList`, () => {

  describe(`\n\tconstructor\n\tlet myLinkedList = new LinkedList(4)\n\t`, () => {
    let myLinkedList = new LinkedList(4)
    it(`myLinkedList.length > 1`, () => {
      const expectedResult = 1
      const result = myLinkedList.length
      expect(result).toEqual(expectedResult)
    })
    it(`myLinkedList.head.value > 4`, () => {
      const expectedResult = 4
      const result = myLinkedList.head.value
      expect(result).toEqual(expectedResult)
    })
    it(`myLinkedList.head.next > null`, () => {
      const expectedResult = null
      const result = myLinkedList.head.next
      expect(result).toEqual(expectedResult)
    })
    it(`myLinkedList.head > { value: 4, next: null }`, () => {
      const expectedResult = { value: 4, next: null }
      const result = myLinkedList.head
      expect(result).toEqual(expectedResult)
    })
    it(`myLinkedList.tail.value > 4`, () => {
      const expectedResult = 4
      const result = myLinkedList.tail.value
      expect(result).toEqual(expectedResult)
    })
    it(`myLinkedList.tail.next > null`, () => {
      const expectedResult = null
      const result = myLinkedList.tail.next
      expect(result).toEqual(expectedResult)
    })
    it(`myLinkedList.tail > { value: 4, next: null }`, () => {
      const expectedResult = { value: 4, next: null }
      const result = myLinkedList.tail
      expect(result).toEqual(expectedResult)
    })
  })

  describe('\n\tpush()\n\tlet myLinkedList = new LinkedList(7)\n\tmyLinkedList.push(4)\n\t', () => {
    let myLinkedList = new LinkedList(7)
    myLinkedList.push(4)

    const s = {
      head: {
        value: 7,
        next: {
          value: 4,
          next: null
        }
      },
      tail: {
        value: 4,
        next: null
      },
      length: 2
    }


    const tests = [
      [
        'this.head', myLinkedList.head, 'toEqual', {
          value: 7,
          next: {
            value: 4,
            next: null
          }
        }
      ],
      [
        'this.head.next', myLinkedList.head.next, 'toEqual', {
          value: 4,
          next: null
        }
      ],
      ['this.head.value', myLinkedList.head.value, 'toEqual', 7],
      ['this.head.value', myLinkedList.head.value, 'toEqual', 7],
      ['this.head.next.value', myLinkedList.head.next.value, 'toEqual', 4],
      ['this.head.next.next', myLinkedList.head.next.next, 'toBeNull', null],
      [
        'this.tail', myLinkedList.tail, 'toEqual', {
          value: 4,
          next: null
        }
      ],
      ['this.tail.value', myLinkedList.tail.value, 'toEqual', 4],
      ['this.tail.next', myLinkedList.tail.next, 'toBeNull', null],
      ['this.length', myLinkedList.length, 'toEqual', 2],
    ]
    
    tests.forEach(([message, result, testMethod, expectedResult]) => {
      it(`${message} >> ${J(expectedResult)}`, () => {
        expect(result)[testMethod](expectedResult);
      });
    })
  })
})
