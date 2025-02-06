import { suite } from "vitest";
import { LinkedList, Node } from ".";
import { describe, it, expect } from "vitest";
import { J } from "../../utils";

suite(`LinkedList`, () => {

  suite(`constructor`, () => {
    describe(`\n\tlet myLinkedList = new LinkedList(4)\n\t`, () => {
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
  })

  suite(`push()`, () => {
    describe('\n\tlet myLinkedList = new LinkedList(7)\n\tmyLinkedList.push(4)\n\t', () => {
      let myLinkedList = new LinkedList(7)
      myLinkedList.push(4)

      const tests = [
        [
          'myLinkedList.head', myLinkedList.head, 'toEqual', {
            value: 7,
            next: {
              value: 4,
              next: null
            }
          }
        ],
        [
          'myLinkedList.head.next', myLinkedList.head.next, 'toEqual', {
            value: 4,
            next: null
          }
        ],
        ['myLinkedList.head.value', myLinkedList.head.value, 'toEqual', 7],
        ['myLinkedList.head.value', myLinkedList.head.value, 'toEqual', 7],
        ['myLinkedList.head.next.value', myLinkedList.head.next.value, 'toEqual', 4],
        ['myLinkedList.head.next.next', myLinkedList.head.next.next, 'toBeNull', null],
        [
          'myLinkedList.tail', myLinkedList.tail, 'toEqual', {
            value: 4,
            next: null
          }
        ],
        ['myLinkedList.tail.value', myLinkedList.tail.value, 'toEqual', 4],
        ['myLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
        ['myLinkedList.length', myLinkedList.length, 'toEqual', 2],
      ]

      tests.forEach(([message, result, testMethod, expectedResult]) => {
        it(`${message} >> ${J(expectedResult)}`, () => {
          expect(result)[testMethod](expectedResult);
        });
      })
    })

  })

  suite(`pop()`, () => {
    describe('\n\tlet myLinkedList = new LinkedList(1);\n\tmyLinkedList.push(2);\n\tmyLinkedList.pop();\n\t', () => {
      let myLinkedList = new LinkedList(1)
      myLinkedList.push(2)
      myLinkedList.push(3)
      const popValue = myLinkedList.pop()

      const tests = [
        [
          'myLinkedList.pop()', popValue, 'toEqual', {
            value: 3,
            next: null
          }
        ],
        [
          'myLinkedList.head', myLinkedList.head, 'toEqual', {
            value: 1,
            next: {
              value: 2,
              next: null
            }
          }
        ],
        [
          'myLinkedList.head.next', myLinkedList.head.next, 'toEqual', {
            value: 2,
            next: null
          }
        ],
        ['myLinkedList.head.value', myLinkedList.head.value, 'toEqual', 1],
        ['myLinkedList.head.value', myLinkedList.head.value, 'toEqual', 1],
        ['myLinkedList.head.next.value', myLinkedList.head.next.value, 'toEqual', 2],
        ['myLinkedList.head.next.next', myLinkedList.head.next.next, 'toBeNull', null],
        [
          'myLinkedList.tail', myLinkedList.tail, 'toEqual', {
            value: 2,
            next: null
          }
        ],
        ['myLinkedList.tail.value', myLinkedList.tail.value, 'toEqual', 2],
        ['myLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
        ['myLinkedList.length', myLinkedList.length, 'toEqual', 2],
      ]

      tests.forEach(([message, result, testMethod, expectedResult]) => {
        it(`${message} >> ${J(expectedResult)}`, () => {
          expect(result)[testMethod](expectedResult);
        });
      })
    })

    describe('\n\tlet myLinkedList = new LinkedList(1);\n\tmyLinkedList.push(2);\n\tmyLinkedList.pop();\n\tmyLinkedList.pop();\n\t', () => {
      let myLinkedList = new LinkedList(1)
      myLinkedList.push(2)
      myLinkedList.push(3)
      myLinkedList.pop()
      const popValue = myLinkedList.pop()

      const tests = [
        [
          'myLinkedList.pop()', popValue, 'toEqual', {
            value: 2,
            next: null
          }
        ],
        [
          'myLinkedList.head', myLinkedList.head, 'toEqual', {
            value: 1,
            next: null
          }
        ],
        [
          'myLinkedList.head.next', myLinkedList.head.next, 'toBeNull', null
        ],
        ['myLinkedList.head.value', myLinkedList.head.value, 'toBe', 1],
        ['myLinkedList.head.value', myLinkedList.head.value, 'toBe', 1],
        [
          'myLinkedList.tail', myLinkedList.tail, 'toEqual', {
            value: 1,
            next: null
          }
        ],
        ['myLinkedList.tail.value', myLinkedList.tail.value, 'toBe', 1],
        ['myLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
        ['myLinkedList.length', myLinkedList.length, 'toBe', 1],
      ]

      tests.forEach(([message, result, testMethod, expectedResult]) => {
        it(`${message} >> ${J(expectedResult)}`, () => {
          expect(result)[testMethod](expectedResult);
        });
      })
    })

    describe('\n\tlet myLinkedList = new LinkedList(1);\n\tmyLinkedList.push(2);\n\tmyLinkedList.pop();\n\tmyLinkedList.pop();\n\tmyLinkedList.pop();\n\t', () => {
      let myLinkedList = new LinkedList(1)
      myLinkedList.push(2)
      myLinkedList.push(3)
      myLinkedList.pop()
      myLinkedList.pop()
      const popValue = myLinkedList.pop()

      const tests = [
        [
          'myLinkedList.pop()', popValue, 'toEqual', {
            value: 1,
            next: null
          }
        ],
        [
          'myLinkedList.head', myLinkedList.head, 'toBeNull', null
        ],
        [
          'myLinkedList.tail', myLinkedList.tail, 'toBeNull', null
        ],
        ['myLinkedList.length', myLinkedList.length, 'toBe', 0],
      ]

      tests.forEach(([message, result, testMethod, expectedResult]) => {
        it(`${message} >> ${J(expectedResult)}`, () => {
          expect(result)[testMethod](expectedResult);
        });
      })
    })
    describe('\n\tlet myLinkedList = new LinkedList(1);\n\tmyLinkedList.push(2);\n\tmyLinkedList.pop();\n\tmyLinkedList.pop();\n\tmyLinkedList.pop();\n\tmyLinkedList.pop();\n\t', () => {
      let myLinkedList = new LinkedList(1)
      myLinkedList.push(2)
      myLinkedList.push(3)
      myLinkedList.pop()
      myLinkedList.pop()
      myLinkedList.pop()
      const popValue = myLinkedList.pop()

      const tests = [
        [
          'myLinkedList.pop()', popValue, 'toBeUndefined'
        ],
        [
          'myLinkedList.head', myLinkedList.head, 'toBeNull', null
        ],
        [
          'myLinkedList.tail', myLinkedList.tail, 'toBeNull', null
        ],
        ['myLinkedList.length', myLinkedList.length, 'toBe', 0],
      ]

      tests.forEach(([message, result, testMethod, expectedResult]) => {
        it(`${message} >> ${J(expectedResult)}`, () => {
          expect(result)[testMethod](expectedResult);
        });
      })
    })
  })

  suite(`unshift()`, () => {
    describe('\n\tlet myLinkedList = new LinkedList(11);\n\tmyLinkedList.push(3);\n\tmyLinkedList.push(23);\n\tmyLinkedList.push(7);\n\t', () => {
      let myLinkedList = new LinkedList(11)
      myLinkedList.push(3)
      myLinkedList.push(23)
      myLinkedList.push(7)

      const tests = [
        [
          'myLinkedList.head', myLinkedList.head, 'toEqual', {
            value: 11,
            next: {
              value: 3,
              next: {
                value: 23,
                next: {
                  value: 7,
                  next: null
                }
              }
            }
          }
        ],
        [
          'myLinkedList.head.next', myLinkedList.head.next, 'toEqual', {
            value: 3,
            next: {
              value: 23,
              next: {
                value: 7,
                next: null
              }
            }
          }
        ],
        ['myLinkedList.head.value', myLinkedList.head.value, 'toBe', 11],
        ['myLinkedList.head.next.next.next.next', myLinkedList.head.next.next.next.next, 'toBeNull', null],
        ['myLinkedList.head.next.next.next === myLinkedList.tail', myLinkedList.head.next.next.next === myLinkedList.tail, 'toBe', true],
        [
          'myLinkedList.tail', myLinkedList.tail, 'toEqual', {
            value: 7,
            next: null
          }
        ],
        ['myLinkedList.tail.value', myLinkedList.tail.value, 'toBe', 7],
        ['myLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
        ['myLinkedList.length', myLinkedList.length, 'toEqual', 4],
      ]

      tests.forEach(([message, result, testMethod, expectedResult]) => {
        it(`${message} >> ${J(expectedResult)}`, () => {
          expect(result)[testMethod](expectedResult);
        });
      })
    })

    describe('\n\tlet myLinkedList = new LinkedList(11);\n\tmyLinkedList.push(3);\n\tmyLinkedList.push(23);\n\tmyLinkedList.push(7);\n\t', () => {
      let myLinkedList = new LinkedList(11)
      myLinkedList.push(3)
      myLinkedList.push(23)
      myLinkedList.push(7)
      myLinkedList.unshift(4)

      const tests = [
        [
          'myLinkedList.head', myLinkedList.head, 'toEqual', {
            value: 4,
            next: {
              value: 11,
              next: {
                value: 3,
                next: {
                  value: 23,
                  next: {
                    value: 7,
                    next: null
                  }
                }
              }
            }
          }
        ],
        [
          'myLinkedList.head.next', myLinkedList.head.next, 'toEqual', {
            value: 11,
            next: {
              value: 3,
              next: {
                value: 23,
                next: {
                  value: 7,
                  next: null
                }
              }
            }
          }
        ],
        ['myLinkedList.head.value', myLinkedList.head.value, 'toBe', 4],
        ['myLinkedList.head.next.next.next.next.next', myLinkedList.head.next.next.next.next.next, 'toBeNull', null],
        ['myLinkedList.head.next.next.next.next === myLinkedList.tail', myLinkedList.head.next.next.next.next === myLinkedList.tail, 'toBe', true],
        [
          'myLinkedList.tail', myLinkedList.tail, 'toEqual', {
            value: 7,
            next: null
          }
        ],
        ['myLinkedList.tail.value', myLinkedList.tail.value, 'toBe', 7],
        ['myLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
        ['myLinkedList.length', myLinkedList.length, 'toEqual', 5],
      ]

      tests.forEach(([message, result, testMethod, expectedResult]) => {
        it(`${message} >> ${J(expectedResult)}`, () => {
          expect(result)[testMethod](expectedResult);
        });
      })
    })

  })

})
