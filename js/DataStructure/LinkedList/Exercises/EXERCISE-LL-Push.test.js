import { describe, it, expect, vi } from "vitest";
import LinkedList from "./EXERCISE-LL-Push";
import { J } from "../LinkedList.test";

describe(`EXERCISE-LL-Push\n\tlet myLinkedList = new LinkedList(1);\n\tmyLinkedList.makeEmpty();\n\tmyLinkedList.push(1);\n\tmyLinkedList.push(2);`, () => {
  let myLinkedList = new LinkedList(1);
  myLinkedList.makeEmpty();
  myLinkedList.push(1);
  myLinkedList.push(2);

  const tests = [
    ['getHead', "Head: 1"],
    ['getTail', "Tail: 2"],
    ['getLength', "Length: 2"],
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

  it("\n\tmyLinkedList.printList(); >> ['1', '2']", () => {
    const consoleLogMock = vi.spyOn(console, "log").mockImplementation(() => {});
    myLinkedList.printList();
    expect(consoleLogMock).toHaveBeenCalledWith(1);
    expect(consoleLogMock).toHaveBeenCalledWith(2);
    consoleLogMock.mockRestore();
  });
}) 