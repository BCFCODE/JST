import { describe, it, expect, vi } from "vitest";
import LinkedList from "./EXERCISE-LL-Constructor";
import { J } from "../LinkedList.test";

describe(`EXERCISE-LL-Constructor\n\tconst myLinkedList = new LinkedList(4);`, () => {
  const myLinkedList = new LinkedList(4)
  const tests = [
    ['getHead', "Head: 4"],
    ['getTail', "Tail: 4"],
    ['getLength', "Length: 1"],
    ['printList', 4]
  ]

  tests.forEach(([method, expectedResult]) => {
    it(`\n\tmyLinkedList.${method}(); >> ${J(expectedResult)}`, () => {
      // Mock console.log
      const consoleLogMock = vi.fn()
      global.console.log = consoleLogMock

      // Call the printList method
      myLinkedList[method]();

      // Check if console.log was called with the expected result
      expect(consoleLogMock).toHaveBeenCalledWith(expectedResult)
    })
  })
 
}) 