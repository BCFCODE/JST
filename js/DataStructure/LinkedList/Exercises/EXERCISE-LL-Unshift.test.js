import { describe, suite, it, expect } from "vitest"
import LinkedList from "./EXERCISE-LL-Unshift"
import { J } from "../../../utils"

describe('EXERCISE-LL-Unshift', () => {
  describe('Before unshift()\n\tlet myLinkedList = new LinkedList(2);\n\tmyLinkedList.push(3);\n\t', () => {
    let myLinkedList = new LinkedList(2)
    myLinkedList.push(3)

    const tests = [
      [
        'myLinkedList.head', myLinkedList.head, 'toEqual', {
          value: 2,
          next: {
            value: 3,
            next: null
          }
        }
      ],
      [
        'myLinkedList.head.next', myLinkedList.head.next, 'toEqual', {
          value: 3,
          next: null
        }
      ],
      ['myLinkedList.head.value', myLinkedList.head.value, 'toBe', 2],
      ['myLinkedList.head.next.next', myLinkedList.head.next.next, 'toBeNull', null],
      ['myLinkedList.head.next === myLinkedList.tail', myLinkedList.head.next === myLinkedList.tail, 'toBe', true],
      [
        'myLinkedList.tail', myLinkedList.tail, 'toEqual', {
          value: 3,
          next: null
        }
      ],
      ['myLinkedList.tail.value', myLinkedList.tail.value, 'toBe', 3],
      ['myLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
      ['myLinkedList.length', myLinkedList.length, 'toEqual', 2],
    ]

    tests.forEach(([message, result, testMethod, expectedResult]) => {
      it(`${message} >> ${J(expectedResult)}`, () => {
        expect(result)[testMethod](expectedResult);
      });
    })
  })

  describe('After unshift()\n\tlet myLinkedList = new LinkedList(11);\n\tmyLinkedList.push(3);\n\tmyLinkedList.push(23);\n\tmyLinkedList.push(7);\n\tmyLinkedList.unshift(4)\n\t', () => {
    let myLinkedList = new LinkedList(2)
    myLinkedList.push(3)
    myLinkedList.unshift(1)

    const tests = [
      [
        'myLinkedList.head', myLinkedList.head, 'toEqual', {
          value: 1,
          next: {
            value: 2,
            next: {
              value: 3,
              next: null
            }
          }
        }
      ],
      [
        'myLinkedList.head.next', myLinkedList.head.next, 'toEqual', {
          value: 2,
          next: {
            value: 3,
            next: null
          }
        }
      ],
      ['myLinkedList.head.value', myLinkedList.head.value, 'toBe', 1],
      ['myLinkedList.head.next.next.next', myLinkedList.head.next.next.next, 'toBeNull', null],
      ['myLinkedList.head.next.next === myLinkedList.tail', myLinkedList.head.next.next === myLinkedList.tail, 'toBe', true],
      [
        'myLinkedList.tail', myLinkedList.tail, 'toEqual', {
          value: 3,
          next: null
        }
      ],
      ['myLinkedList.tail.value', myLinkedList.tail.value, 'toBe', 3],
      ['myLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
      ['myLinkedList.length', myLinkedList.length, 'toEqual', 3],
    ]

    tests.forEach(([message, result, testMethod, expectedResult]) => {
      it(`${message} >> ${J(expectedResult)}`, () => {
        expect(result)[testMethod](expectedResult);
      });
    })
  })

})