import { describe, describe } from "vitest";
import { executeTestCases } from "../../../../utils";
import LinkedList from "./EXERCISE-LL-Remove";

describe(`EXERCISE-LL-Remove`, () => {
  describe(`remove(index)`, () => {
    describe('Before remove(index)\n\tlet myLinkedList = new LinkedList(1);\n\tmyLinkedList.push(2);\n\tmyLinkedList.push(3);\n\tmyLinkedList.push(4);\n\tmyLinkedList.push(5);', () => {
      let myLinkedList = new LinkedList(1);
      myLinkedList.push(2);
      myLinkedList.push(3);
      myLinkedList.push(4);
      myLinkedList.push(5);

      const tests = [
        [
          'myLinkedList.head', myLinkedList.head, 'toEqual', {
            value: 1,
            next: {
              value: 2,
              next: {
                value: 3,
                next: {
                  value: 4,
                  next: {
                    value: 5,
                    next: null
                  }
                }
              }
            }
          }
        ],
        [
          'myLinkedList.head.next', myLinkedList.head.next, 'toEqual', {
            value: 2,
            next: {
              value: 3,
              next: {
                value: 4,
                next: {
                  value: 5,
                  next: null
                }
              }
            }
          }
        ],
        ['myLinkedList.head.value', myLinkedList.head.value, 'toBe', 1],
        ['myLinkedList.head.next.value', myLinkedList.head.next.value, 'toBe', 2],
        ['myLinkedList.head.next.next.value', myLinkedList.head.next.next.value, 'toBe', 3],
        ['myLinkedList.head.next.next.next.value', myLinkedList.head.next.next.next.value, 'toBe', 4],
        ['myLinkedList.head.next.next.next.next.value', myLinkedList.head.next.next.next.next.value, 'toBe', 5],
        ['myLinkedList.head.next.next.next.next.next', myLinkedList.head.next.next.next.next.next, 'toBeNull', null],
        ['myLinkedList.head.next.next.next.next === myLinkedList.tail', myLinkedList.head.next.next.next.next === myLinkedList.tail, 'toBe', true],
        [
          'myLinkedList.tail', myLinkedList.tail, 'toEqual', {
            value: 5,
            next: null
          }
        ],
        ['myLinkedList.tail.value', myLinkedList.tail.value, 'toBe', 5],
        ['myLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
        ['myLinkedList.length', myLinkedList.length, 'toEqual', 5],
      ]

      executeTestCases(tests)
    })

    describe('After removing an element with index less than 0: remove(-1)\n\tlet myLinkedList = new LinkedList(1);\n\tmyLinkedList.push(2);\n\tmyLinkedList.push(3);\n\tmyLinkedList.push(4);\n\tmyLinkedList.push(5);\n\tconst removedNode = myLinkedList.remove(-1)', () => {
      let myLinkedList = new LinkedList(1);
      myLinkedList.push(2);
      myLinkedList.push(3);
      myLinkedList.push(4);
      myLinkedList.push(5);
      const removedNode = myLinkedList.remove(-1)

      const tests = [
        [
          'myLinkedList.head', myLinkedList.head, 'toEqual', {
            value: 1,
            next: {
              value: 2,
              next: {
                value: 3,
                next: {
                  value: 4,
                  next: {
                    value: 5,
                    next: null
                  }
                }
              }
            }
          }
        ],
        [
          'myLinkedList.head.next', myLinkedList.head.next, 'toEqual', {
            value: 2,
            next: {
              value: 3,
              next: {
                value: 4,
                next: {
                  value: 5,
                  next: null
                }
              }
            }
          }
        ],
        ['myLinkedList.head.value', myLinkedList.head.value, 'toBe', 1],
        ['myLinkedList.head.next.value', myLinkedList.head.next.value, 'toBe', 2],
        ['myLinkedList.head.next.next.value', myLinkedList.head.next.next.value, 'toBe', 3],
        ['myLinkedList.head.next.next.next.value', myLinkedList.head.next.next.next.value, 'toBe', 4],
        ['myLinkedList.head.next.next.next.next.value', myLinkedList.head.next.next.next.next.value, 'toBe', 5],
        ['myLinkedList.head.next.next.next.next.next', myLinkedList.head.next.next.next.next.next, 'toBeNull', null],
        ['myLinkedList.head.next.next.next.next === myLinkedList.tail', myLinkedList.head.next.next.next.next === myLinkedList.tail, 'toBe', true],
        [
          'myLinkedList.tail', myLinkedList.tail, 'toEqual', {
            value: 5,
            next: null
          }
        ],
        ['myLinkedList.tail.value', myLinkedList.tail.value, 'toBe', 5],
        ['myLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
        ['myLinkedList.length', myLinkedList.length, 'toEqual', 5],
        ['myLinkedList.length', myLinkedList.length, 'toEqual', 5],
        ['removedNode', removedNode, 'toBeUndefined', undefined],
      ]

      executeTestCases(tests)
    })

    describe('After removing an element with index greater than myLinkedList.length: remove(5)\n\tlet myLinkedList = new LinkedList(1);\n\tmyLinkedList.push(2);\n\tmyLinkedList.push(3);\n\tmyLinkedList.push(4);\n\tmyLinkedList.push(5);\n\tconst removedNode = myLinkedList.remove(-1)', () => {
      let myLinkedList = new LinkedList(1);
      myLinkedList.push(2);
      myLinkedList.push(3);
      myLinkedList.push(4);
      myLinkedList.push(5);
      const removedNode = myLinkedList.remove(5)

      const tests = [
        [
          'myLinkedList.head', myLinkedList.head, 'toEqual', {
            value: 1,
            next: {
              value: 2,
              next: {
                value: 3,
                next: {
                  value: 4,
                  next: {
                    value: 5,
                    next: null
                  }
                }
              }
            }
          }
        ],
        [
          'myLinkedList.head.next', myLinkedList.head.next, 'toEqual', {
            value: 2,
            next: {
              value: 3,
              next: {
                value: 4,
                next: {
                  value: 5,
                  next: null
                }
              }
            }
          }
        ],
        ['myLinkedList.head.value', myLinkedList.head.value, 'toBe', 1],
        ['myLinkedList.head.next.value', myLinkedList.head.next.value, 'toBe', 2],
        ['myLinkedList.head.next.next.value', myLinkedList.head.next.next.value, 'toBe', 3],
        ['myLinkedList.head.next.next.next.value', myLinkedList.head.next.next.next.value, 'toBe', 4],
        ['myLinkedList.head.next.next.next.next.value', myLinkedList.head.next.next.next.next.value, 'toBe', 5],
        ['myLinkedList.head.next.next.next.next.next', myLinkedList.head.next.next.next.next.next, 'toBeNull', null],
        ['myLinkedList.head.next.next.next.next === myLinkedList.tail', myLinkedList.head.next.next.next.next === myLinkedList.tail, 'toBe', true],
        [
          'myLinkedList.tail', myLinkedList.tail, 'toEqual', {
            value: 5,
            next: null
          }
        ],
        ['myLinkedList.tail.value', myLinkedList.tail.value, 'toBe', 5],
        ['myLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
        ['myLinkedList.length', myLinkedList.length, 'toEqual', 5],
        ['myLinkedList.length', myLinkedList.length, 'toEqual', 5],
        ['removedNode', removedNode, 'toBeUndefined', undefined],
      ]

      executeTestCases(tests)
    })

    describe('After removing first element: remove(0)\n\tlet myLinkedList = new LinkedList(1);\n\tmyLinkedList.push(2);\n\tmyLinkedList.push(3);\n\tmyLinkedList.push(4);\n\tmyLinkedList.push(5);\n\tconst removedNode = myLinkedList.remove(0)', () => {
      let myLinkedList = new LinkedList(1);
      myLinkedList.push(2);
      myLinkedList.push(3);
      myLinkedList.push(4);
      myLinkedList.push(5);
      const removedNode = myLinkedList.remove(0)

      const tests = [
        [
          'myLinkedList.head', myLinkedList.head, 'toEqual', {
            value: 2,
            next: {
              value: 3,
              next: {
                value: 4,
                next: {
                  value: 5,
                  next: null
                }
              }
            }
          }
        ],
        ['myLinkedList.head.value', myLinkedList.head.value, 'toBe', 2],
        ['myLinkedList.head.next.value', myLinkedList.head.next.value, 'toBe', 3],
        ['myLinkedList.head.next.next.value', myLinkedList.head.next.next.value, 'toBe', 4],
        ['myLinkedList.head.next.next.next.value', myLinkedList.head.next.next.next.value, 'toBe', 5],
        ['myLinkedList.head.next.next.next.next', myLinkedList.head.next.next.next.next, 'toBeNull', null],
        ['myLinkedList.head.next.next.next === myLinkedList.tail', myLinkedList.head.next.next.next === myLinkedList.tail, 'toBe', true],
        [
          'myLinkedList.tail', myLinkedList.tail, 'toEqual', {
            value: 5,
            next: null
          }
        ],
        ['myLinkedList.tail.value', myLinkedList.tail.value, 'toBe', 5],
        ['myLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
        ['myLinkedList.length', myLinkedList.length, 'toEqual', 4],
        ['removedNode.value', removedNode.value, 'toBe', 1],
        ['removedNode.next', removedNode.next, 'toBeNull', null],
        ['typeof removedNode', removedNode.next, 'toBeTypeOf', 'object'],
      ]

      executeTestCases(tests)
    })

    describe('After removing last element: remove(4)\n\tlet myLinkedList = new LinkedList(1);\n\tmyLinkedList.push(2);\n\tmyLinkedList.push(3);\n\tmyLinkedList.push(4);\n\tmyLinkedList.push(5);\n\tconst removedNode = myLinkedList.remove(4)', () => {
      let myLinkedList = new LinkedList(1);
      myLinkedList.push(2);
      myLinkedList.push(3);
      myLinkedList.push(4);
      myLinkedList.push(5);
      const removedNode = myLinkedList.remove(4)

      const tests = [
        [
          'myLinkedList.head', myLinkedList.head, 'toEqual', {
            value: 1,
            next: {
              value: 2,
              next: {
                value: 3,
                next: {
                  value: 4,
                  next: null
                }
              }
            }
          }
        ],
        ['myLinkedList.head.value', myLinkedList.head.value, 'toBe', 1],
        ['myLinkedList.head.next.value', myLinkedList.head.next.value, 'toBe', 2],
        ['myLinkedList.head.next.next.value', myLinkedList.head.next.next.value, 'toBe', 3],
        ['myLinkedList.head.next.next.next.value', myLinkedList.head.next.next.next.value, 'toBe', 4],
        ['myLinkedList.head.next.next.next.next', myLinkedList.head.next.next.next.next, 'toBeNull', null],
        ['myLinkedList.head.next.next.next === myLinkedList.tail', myLinkedList.head.next.next.next === myLinkedList.tail, 'toBe', true],
        [
          'myLinkedList.tail', myLinkedList.tail, 'toEqual', {
            value: 4,
            next: null
          }
        ],
        ['myLinkedList.tail.value', myLinkedList.tail.value, 'toBe', 4],
        ['myLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
        ['myLinkedList.length', myLinkedList.length, 'toEqual', 4],
        ['removedNode.value', removedNode.value, 'toBe', 5],
        ['removedNode.next', removedNode.next, 'toBeNull', null],
        ['typeof removedNode', removedNode.next, 'toBeTypeOf', 'object'],
      ]

      executeTestCases(tests)
    })

    describe('After removing middle element: remove(2)\n\tlet myLinkedList = new LinkedList(1);\n\tmyLinkedList.push(2);\n\tmyLinkedList.push(3);\n\tmyLinkedList.push(4);\n\tmyLinkedList.push(5);\n\tconst removedNode = myLinkedList.remove(2)', () => {
      let myLinkedList = new LinkedList(1);
      myLinkedList.push(2);
      myLinkedList.push(3);
      myLinkedList.push(4);
      myLinkedList.push(5);
      const removedNode = myLinkedList.remove(2)

      const tests = [
        [
          'myLinkedList.head', myLinkedList.head, 'toEqual', {
            value: 1,
            next: {
              value: 2,
              next: {
                value: 4,
                next: {
                  value: 5,
                  next: null
                }
              }
            }
          }
        ],
        ['myLinkedList.head.value', myLinkedList.head.value, 'toBe', 1],
        ['myLinkedList.head.next.value', myLinkedList.head.next.value, 'toBe', 2],
        ['myLinkedList.head.next.next.value', myLinkedList.head.next.next.value, 'toBe', 4],
        ['myLinkedList.head.next.next.next.value', myLinkedList.head.next.next.next.value, 'toBe', 5],
        ['myLinkedList.head.next.next.next.next', myLinkedList.head.next.next.next.next, 'toBeNull', null],
        ['myLinkedList.head.next.next.next === myLinkedList.tail', myLinkedList.head.next.next.next === myLinkedList.tail, 'toBe', true],
        [
          'myLinkedList.tail', myLinkedList.tail, 'toEqual', {
            value: 5,
            next: null
          }
        ],
        ['myLinkedList.tail.value', myLinkedList.tail.value, 'toBe', 5],
        ['myLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
        ['myLinkedList.length', myLinkedList.length, 'toEqual', 4],
        ['removedNode.value', removedNode.value, 'toBe', 3],
        ['removedNode.next', removedNode.next, 'toBeNull', null],
        ['typeof removedNode', removedNode.next, 'toBeTypeOf', 'object'],
      ]

      executeTestCases(tests)
    })

  })
})