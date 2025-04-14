import { DoublyLinkedList } from ".";
import { describe, it, expect, describe } from "vitest";
import { J, runTests } from "../../utils";

describe(`DoublyLinkedList`, () => {

  const propertyTests = (myDoublyLinkedList) => {
    const nodeProperties = ['value', 'prev', 'next']
    const headPropertyTests = nodeProperties.map(property =>
      [
        `\n\tmyDoublyLinkedList.head.hasOwnProperty(${property})`,
        myDoublyLinkedList.head.hasOwnProperty(property), 'toBe', true
      ]
    )
    const tailPropertyTests = nodeProperties.map(property =>
      [
        `\n\tmyDoublyLinkedList.tail.hasOwnProperty(${property})`,
        myDoublyLinkedList.tail.hasOwnProperty(property), 'toBe', true
      ]
    )

    const myDoublyLinkedListPropertyTests =
      ['head', 'tail', 'length'].map(property =>
        [
          `\n\tmyDoublyLinkedList.hasOwnProperty(${property})`,
          myDoublyLinkedList.hasOwnProperty(property), 'toBe', true
        ]
      )

    return [...myDoublyLinkedListPropertyTests, ...headPropertyTests, ...tailPropertyTests]
  }

  describe(`constructor`, () => {
    describe(`\n\tlet myDoublyLinkedList = new DoublyLinkedList(7)`, () => {
      let myDoublyLinkedList = new DoublyLinkedList(7)

      const tests = [
        ...propertyTests(myDoublyLinkedList),
        [
          '\n\tmyDoublyLinkedList.head', myDoublyLinkedList.head, 'toEqual', {
            value: 7,
            next: null,
            prev: null
          }
        ],
        ['\n\tmyDoublyLinkedList.head.value', myDoublyLinkedList.head.value, 'toBe', 7],
        ['\n\tmyDoublyLinkedList.head.next', myDoublyLinkedList.head.next, 'toBeNull', null],
        ['\n\tmyDoublyLinkedList.head.prev', myDoublyLinkedList.head.prev, 'toBeNull', null],
        ['\n\tmyDoublyLinkedList.head === myDoublyLinkedList.tail', myDoublyLinkedList.head === myDoublyLinkedList.tail, 'toBe', true],
        [
          '\n\tmyDoublyLinkedList.tail', myDoublyLinkedList.tail, 'toEqual', {
            value: 7,
            next: null,
            prev: null
          }
        ],
        ['\n\tmyDoublyLinkedList.tail.value', myDoublyLinkedList.tail.value, 'toBe', 7],
        ['\n\tmyDoublyLinkedList.tail.next', myDoublyLinkedList.tail.next, 'toBeNull', null],
        ['\n\tmyDoublyLinkedList.tail.prev', myDoublyLinkedList.tail.prev, 'toBeNull', null],
        ["\n\tmyDoublyLinkedList.length", myDoublyLinkedList.length, 'toBe', 1],
      ]

      runTests(tests)

    })



  })

  describe(`push()`, () => {
    describe('\n\tlet myDoublyLinkedList = new DoublyLinkedList(1)\n\tmyDoublyLinkedList.push(2)', () => {
      let myDoublyLinkedList = new DoublyLinkedList(1)
      const pushValue = myDoublyLinkedList.push(2)

      const headTests = [
        ['\n\tmyDoublyLinkedList.head.value', myDoublyLinkedList.head.value, 'toBe', 1],
        ['\n\tmyDoublyLinkedList.head.next.next', myDoublyLinkedList.head.prev, 'toBeNull', null],
        ['\n\tmyDoublyLinkedList.head.next.value', myDoublyLinkedList.head.next.value, 'toBe', 2],
        ['\n\tmyDoublyLinkedList.head.next.prev.value', myDoublyLinkedList.head.next.prev.value, 'toBe', 1],
        ['\n\tmyDoublyLinkedList.head.next.prev.prev', myDoublyLinkedList.head.next.prev.prev, 'toBeNull', null],
      ]

      const tailTests = [
        ['\n\tmyDoublyLinkedList.tail.value', myDoublyLinkedList.tail.value, 'toBe', 2],
        ['\n\tmyDoublyLinkedList.tail.prev.value', myDoublyLinkedList.tail.prev.value, 'toBe', 1],
        ['\n\tmyDoublyLinkedList.tail.prev.prev', myDoublyLinkedList.tail.prev.prev, 'toBeNull', null],
        ['\n\tmyDoublyLinkedList.tail.prev.next.next', myDoublyLinkedList.tail.prev.next.next, 'toBeNull', null],
      ]

      const tests = [
        ...propertyTests(myDoublyLinkedList),
        ...headTests, ...tailTests,
        ['myDoublyLinkedList.length', myDoublyLinkedList.length, 'toEqual', 2],
        ['\n\tconst pushValue = myDoublyLinkedList.push(2); \n\tpushValue === myDoublyLinkedList', pushValue === myDoublyLinkedList, 'toBe', true]
      ]

      runTests(tests)
    })

  })

  describe(`pop()`, () => {
    describe('Before pop()\n\tlet myDoublyLinkedList = new LinkedList(1);\n\tmyDoublyLinkedList.push(2);', () => {
      let myDoublyLinkedList = new DoublyLinkedList(1)
      myDoublyLinkedList.push(2)

      const tests = [
        ...propertyTests(myDoublyLinkedList),
        ['\n\tmyDoublyLinkedList.head.value', myDoublyLinkedList.head.value, 'toBe', 1],
        ['\n\tmyDoublyLinkedList.tail.prev.value', myDoublyLinkedList.tail.prev.value, 'toBe', 1],
        ['\n\tmyDoublyLinkedList.head.next.value', myDoublyLinkedList.head.next.value, 'toBe', 2],
        ['\n\tmyDoublyLinkedList.tail.value', myDoublyLinkedList.tail.value, 'toBe', 2],
        ['\n\tmyDoublyLinkedList.head.prev', myDoublyLinkedList.head.prev, 'toBeNull', null],
        ['\n\tmyDoublyLinkedList.tail.next', myDoublyLinkedList.tail.next, 'toBeNull', null],
        ['\n\tmyDoublyLinkedList.head.next.next', myDoublyLinkedList.head.next.next, 'toBeNull', null],
        ['\n\tmyDoublyLinkedList.tail.prev.prev', myDoublyLinkedList.tail.prev.prev, 'toBeNull', null],
        ['\n\tmyDoublyLinkedList.length', myDoublyLinkedList.length, 'toBe', 2],
      ]

      runTests(tests)
    })

    describe('After first pop()\n\tlet myDoublyLinkedList = new LinkedList(1);\n\tmyDoublyLinkedList.push(2);\n\tconst popValue = myDoublyLinkedList.pop()', () => {
      let myDoublyLinkedList = new DoublyLinkedList(1)
      myDoublyLinkedList.push(2)
      const popValue = myDoublyLinkedList.pop()

      const tests = [
        ...propertyTests(myDoublyLinkedList),
        ['\n\tmyDoublyLinkedList.head.value', myDoublyLinkedList.head.value, 'toBe', 1],
        ['\n\tmyDoublyLinkedList.head.next', myDoublyLinkedList.head.next, 'toBeNull', null],
        ['\n\tmyDoublyLinkedList.head.prev', myDoublyLinkedList.head.prev, 'toBeNull', null],
        ['\n\tmyDoublyLinkedList.tail.value', myDoublyLinkedList.tail.value, 'toBe', 1],
        ['\n\tmyDoublyLinkedList.tail.next', myDoublyLinkedList.tail.next, 'toBeNull', null],
        ['\n\tmyDoublyLinkedList.tail.prev', myDoublyLinkedList.tail.prev, 'toBeNull', null],
        ['\n\tmyDoublyLinkedList.length', myDoublyLinkedList.length, 'toBe', 1],
        ['\n\tpopValue', popValue, 'toEqual', { value: 2, next: null, prev: null }],
      ]

      runTests(tests)
    })

    describe('After second pop()\n\tlet myDoublyLinkedList = new LinkedList(1);\n\tmyDoublyLinkedList.push(2);\n\tmyDoublyLinkedList.pop()\n\tconst popValue = myDoublyLinkedList.pop()', () => {
      let myDoublyLinkedList = new DoublyLinkedList(1)
      myDoublyLinkedList.push(2)
      myDoublyLinkedList.pop()
      const popValue = myDoublyLinkedList.pop()

      const tests = [
        ['\n\tmyDoublyLinkedList.head', myDoublyLinkedList.head, 'toBeNull', null],
        ['\n\tmyDoublyLinkedList.tail', myDoublyLinkedList.tail, 'toBeNull', null],
        ['\n\tmyDoublyLinkedList.length', myDoublyLinkedList.length, 'toBe', 0],
        ['\n\tpopValue', popValue, 'toEqual', { value: 1, next: null, prev: null }],
      ]

      runTests(tests)
    })

    describe('After third pop()\n\tlet myDoublyLinkedList = new LinkedList(1);\n\tmyDoublyLinkedList.push(2);\n\tmyDoublyLinkedList.pop()\n\tmyDoublyLinkedList.pop()\n\tconst popValue = myDoublyLinkedList.pop()', () => {
      let myDoublyLinkedList = new DoublyLinkedList(1)
      myDoublyLinkedList.push(2)
      myDoublyLinkedList.pop()
      myDoublyLinkedList.pop()
      const popValue = myDoublyLinkedList.pop()

      const tests = [
        ['\n\tmyDoublyLinkedList.head', myDoublyLinkedList.head, 'toBeNull', null],
        ['\n\tmyDoublyLinkedList.tail', myDoublyLinkedList.tail, 'toBeNull', null],
        ['\n\tmyDoublyLinkedList.length', myDoublyLinkedList.length, 'toBe', 0],
        ['\n\tpopValue', popValue, 'toBeUndefined', undefined],
      ]

      runTests(tests)
    })
  })

})
