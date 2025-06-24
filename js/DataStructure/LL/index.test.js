import { LinkedList } from ".";
import { describe, it, expect, describe } from "vitest";
import { J, executeTestCases } from "../../utils";
import { afterSet4ToIndex1, beforeSet, invalidIndexTestsForSet } from "./TESTS/Set";
import { beforePop, afterFirstPop, afterSecondPop, afterThirdPop } from "./TESTS/Pop";
import { afterFirstInsert, afterSecondInsert, afterThirdInsert, beforeInsert, invalidIndexTestsForInsert } from "./TESTS/Insert";
import { afterReverse, beforeReverse } from "./TESTS/Reverse";

describe(`LinkedList`, () => {

  describe(`constructor`, () => {
    describe(`\n\tlet myLinkedList = new LinkedList(4)`, () => {
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

  describe(`push()`, () => {
    describe('\n\tlet myLinkedList = new LinkedList(7)\n\tmyLinkedList.push(4)', () => {
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

      executeTestCases(tests)
    })

  })

  describe(`pop()`, () => {

    describe('Before pop()\n\tlet myLinkedList = new LinkedList(1);\n\tmyLinkedList.pop(2);', () => {
      let myLinkedList = new LinkedList(1)
      myLinkedList.push(2)

      const tests = beforePop(myLinkedList)

      executeTestCases(tests)
    })

    describe('After first pop()\n\tlet myLinkedList = new LinkedList(1);\n\tmyLinkedList.push(2);\n\tconst popValue = myLinkedList.pop()', () => {
      let myLinkedList = new LinkedList(1)
      myLinkedList.push(2)
      const popValue = myLinkedList.pop()

      const tests = afterFirstPop(myLinkedList, popValue)

      executeTestCases(tests)
    })

    describe('After second pop()\n\tlet myLinkedList = new LinkedList(1);\n\tmyLinkedList.push(2);\n\tmyLinkedList.pop()\n\tconst popValue = myLinkedList.pop()', () => {
      let myLinkedList = new LinkedList(1)
      myLinkedList.push(2)
      myLinkedList.pop()
      const popValue = myLinkedList.pop()

      const tests = afterSecondPop(myLinkedList, popValue)

      executeTestCases(tests)
    })

    describe('After third pop()\n\tlet myLinkedList = new LinkedList(1);\n\tmyLinkedList.push(2);\n\tmyLinkedList.pop()\n\tmyLinkedList.pop()\n\tconst popValue = myLinkedList.pop()', () => {
      let myLinkedList = new LinkedList(1)
      myLinkedList.push(2)
      myLinkedList.pop()
      myLinkedList.pop()
      const popValue = myLinkedList.pop()

      const tests = afterThirdPop(myLinkedList, popValue)

      executeTestCases(tests)
    })

  })

  describe(`unshift()`, () => {
    describe('Before unshift()\n\tlet myLinkedList = new LinkedList(11);\n\tmyLinkedList.push(3);\n\tmyLinkedList.push(23);\n\tmyLinkedList.push(7);', () => {
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

      executeTestCases(tests)
    })

    describe('After unshift()\n\tlet myLinkedList = new LinkedList(11);\n\tmyLinkedList.push(3);\n\tmyLinkedList.push(23);\n\tmyLinkedList.push(7);\n\tmyLinkedList.unshift(4)', () => {
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

      executeTestCases(tests)
    })

  })

  describe(`shift()`, () => {
    describe('Before shift()\n\tlet myLinkedList = new LinkedList(2);\n\tmyLinkedList.push(1);', () => {
      let myLinkedList = new LinkedList(2)
      myLinkedList.push(1)

      const tests = [
        [
          'myLinkedList.head', myLinkedList.head, 'toEqual', {
            value: 2,
            next: {
              value: 1,
              next: null
            }
          }
        ],
        [
          'myLinkedList.head.next', myLinkedList.head.next, 'toEqual', {
            value: 1,
            next: null
          }
        ],
        ['myLinkedList.head.value', myLinkedList.head.value, 'toBe', 2],
        ['myLinkedList.head.next.next', myLinkedList.head.next.next, 'toBeNull', null],
        ['myLinkedList.head.next === myLinkedList.tail', myLinkedList.head.next === myLinkedList.tail, 'toBe', true],
        [
          'myLinkedList.tail', myLinkedList.tail, 'toEqual', {
            value: 1,
            next: null
          }
        ],
        ['myLinkedList.tail.value', myLinkedList.tail.value, 'toBe', 1],
        ['myLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
        ['myLinkedList.length', myLinkedList.length, 'toEqual', 2],
      ]

      executeTestCases(tests)
    })

    describe('After first shift()\n\tlet myLinkedList = new LinkedList(2);\n\tmyLinkedList.push(1);\n\tmyLinkedList.shift();', () => {
      let myLinkedList = new LinkedList(2)
      myLinkedList.push(1)
      myLinkedList.shift()

      const tests = [
        [
          'myLinkedList.head', myLinkedList.head, 'toEqual', {
            value: 1,
            next: null
          }
        ],
        ['myLinkedList.head.next', myLinkedList.head.next, 'toBeNull', null],
        ['myLinkedList.head.value', myLinkedList.head.value, 'toBe', 1],
        ['myLinkedList.head === myLinkedList.tail', myLinkedList.head === myLinkedList.tail, 'toBe', true],
        [
          'myLinkedList.tail', myLinkedList.tail, 'toEqual', {
            value: 1,
            next: null
          }
        ],
        ['myLinkedList.tail.value', myLinkedList.tail.value, 'toBe', 1],
        ['myLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
        ['myLinkedList.length', myLinkedList.length, 'toEqual', 1],
      ]

      executeTestCases(tests)
    })

    describe('After second shift()\n\tlet myLinkedList = new LinkedList(2);\n\tmyLinkedList.push(1);\n\tmyLinkedList.shift();\n\tmyLinkedList.shift();', () => {
      let myLinkedList = new LinkedList(2)
      myLinkedList.push(1)
      myLinkedList.shift()
      myLinkedList.shift()

      const tests = [
        ['myLinkedList.head', myLinkedList.head, 'toBeNull', null],
        ['myLinkedList.head === myLinkedList.tail', myLinkedList.head === myLinkedList.tail, 'toBe', true],
        ['myLinkedList.tail', myLinkedList.tail, 'toBeNull', null],
        ['myLinkedList.length', myLinkedList.length, 'toEqual', 0],
      ]

      executeTestCases(tests)
    })

  })

  describe(`get()`, () => {
    describe('\n\tlet myLinkedList = new LinkedList(0);\n\tmyLinkedList.push(1);\n\tmyLinkedList.push(2);\n\tmyLinkedList.push(3);', () => {
      let myLinkedList = new LinkedList(0)
      myLinkedList.push(1)
      myLinkedList.push(2)
      myLinkedList.push(3)

      const tests = [
        [
          'myLinkedList.head', myLinkedList.head, 'toEqual', {
            value: 0,
            next: {
              value: 1,
              next: {
                value: 2,
                next: {
                  value: 3,
                  next: null
                }
              }
            }
          }
        ],
        ['myLinkedList.head.value', myLinkedList.head.value, 'toBe', 0],
        ['myLinkedList.head.next.next.next', myLinkedList.head.next.next.next.next, 'toBeNull', null],
        ['myLinkedList.head.next.next.next === myLinkedList.tail', myLinkedList.head.next.next.next === myLinkedList.tail, 'toBe', true],
        [
          'myLinkedList.tail', myLinkedList.tail, 'toEqual', {
            value: 3,
            next: null
          }
        ],
        ['myLinkedList.tail.value', myLinkedList.tail.value, 'toBe', 3],
        ['myLinkedList.tail.next', myLinkedList.tail.next, 'toBeNull', null],
        ['myLinkedList.length', myLinkedList.length, 'toEqual', 4],
        ['myLinkedList.get(-1)', myLinkedList.get(-1), 'toBeUndefined', undefined],
        ['myLinkedList.get(10)', myLinkedList.get(10), 'toBeUndefined', undefined],
        [
          'myLinkedList.get(3)', myLinkedList.get(3), 'toEqual', {
            value: 3,
            next: null
          }
        ],
        [
          'myLinkedList.get(2)', myLinkedList.get(2), 'toEqual', {
            value: 2,
            next: {
              value: 3,
              next: null
            }
          }
        ],
        [
          'myLinkedList.get(1)\n\t', myLinkedList.get(1), 'toEqual', {
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
          'myLinkedList.get(0)\n\t', myLinkedList.get(0), 'toEqual', {
            value: 0,
            next: {
              value: 1,
              next: {
                value: 2,
                next: {
                  value: 3,
                  next: null
                }
              }
            }
          }
        ],
        ["\n\tAfter calling get() method, the value must remain unchanged", myLinkedList.length, 'toBe', 4],
      ]

      executeTestCases(tests)
    })

  })

  describe(`set(index, value)`, () => {
    describe('Before set()\n\tlet myLinkedList = new LinkedList(11);\n\tmyLinkedList.push(3);\n\tmyLinkedList.push(23);\n\tmyLinkedList.push(7);', () => {
      let myLinkedList = new LinkedList(11)
      myLinkedList.push(3)
      myLinkedList.push(23)
      myLinkedList.push(7)

      const tests = beforeSet(myLinkedList)

      executeTestCases(tests)
    })

    describe('After set(1, 4)\n\tlet myLinkedList = new LinkedList(11);\n\tmyLinkedList.push(3);\n\tmyLinkedList.push(23);\n\tmyLinkedList.push(7);\n\tmyLinkedList.set(1, 4)', () => {
      let myLinkedList = new LinkedList(11)
      myLinkedList.push(3)
      myLinkedList.push(23)
      myLinkedList.push(7)
      const setValue = myLinkedList.set(1, 4)

      const tests = afterSet4ToIndex1(myLinkedList, setValue)

      executeTestCases(tests)
    });

    // Out of range tests
    [-1, 2, 7, -100].forEach(index => invalidIndexTestsForSet(LinkedList, index))

  })

  describe(`insert(index, value)`, () => {
    describe(`Before insert(index, value)\n\tlet myLinkedList = new LinkedList();\n\tmyLinkedList.pop();`, () => {
      let myLinkedList = new LinkedList()
      myLinkedList.pop()

      const tests = beforeInsert(myLinkedList)

      executeTestCases(tests)
    })

    describe(`let myLinkedList = new LinkedList();\n\tmyLinkedList.pop();\n\tconst insertValue = myLinkedList.insert(0, 1)`, () => {
      let myLinkedList = new LinkedList()
      myLinkedList.pop()
      const insertValue = myLinkedList.insert(0, 1)

      const tests = afterFirstInsert(myLinkedList, insertValue)

      executeTestCases(tests)
    })

    describe(`let myLinkedList = new LinkedList();\n\tmyLinkedList.pop();\n\tmyLinkedList.insert(0, 1)\n\tconst insertValue = myLinkedList.insert(0, 'New value in the beginning')`, () => {
      let myLinkedList = new LinkedList()
      myLinkedList.pop()
      myLinkedList.insert(0, 1)
      const insertValue = myLinkedList.insert(0, 'New value in the beginning')

      const tests = afterSecondInsert(myLinkedList, insertValue)

      executeTestCases(tests)
    });

    describe(`let myLinkedList = new LinkedList();\n\tmyLinkedList.pop();\n\tmyLinkedList.insert(0, 1)\n\tmyLinkedList.insert(0, 'New value in the beginning')\n\tconst insertValue = myLinkedList.insert(1, 'New value in the middle')`, () => {
      let myLinkedList = new LinkedList()
      myLinkedList.pop()
      myLinkedList.insert(0, 1)
      myLinkedList.insert(0, 'New value in the beginning')
      const insertValue = myLinkedList.insert(1, 'New value in the middle')

      const tests = afterThirdInsert(myLinkedList, insertValue)

      executeTestCases(tests)
    });

    // Out of range tests
    [-30, -1, 3, 999].forEach(index => invalidIndexTestsForInsert(LinkedList, index))

  })

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

  describe(`reverse()`, () => {
    describe('Before reverse()\n\tlet myLinkedList = new LinkedList(1);\n\tmyLinkedList.push(2);\n\tmyLinkedList.push(3);\n\tmyLinkedList.push(4);', () => {
      let myLinkedList = new LinkedList(1)
      myLinkedList.push(2)
      myLinkedList.push(3)
      myLinkedList.push(4)

      const tests = beforeReverse(myLinkedList)

      executeTestCases(tests)
    })

    describe('After reverse()\n\tlet myLinkedList = new LinkedList(1);\n\tmyLinkedList.push(2);\n\tmyLinkedList.push(3);\n\tmyLinkedList.push(4);', () => {
      let myLinkedList = new LinkedList(1)
      myLinkedList.push(2)
      myLinkedList.push(3)
      myLinkedList.push(4)
      const reverseValue = myLinkedList.reverse()

      const tests = afterReverse(myLinkedList, reverseValue)

      executeTestCases(tests)
    })

  })

})
