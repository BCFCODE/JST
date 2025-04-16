import { expect, it } from "vitest";

export const J = (value) => JSON.stringify(value)

// Helper function for cleaner test structure
export const executeTestCases = (tests) => {
  tests.forEach(([message, result, assertionMethod, expected]) => {
    it(`${message} >> ${J(expected)}`, () => {
      expect(result)[assertionMethod](expected);
    });
  });
};

export const checkDLLInternalStructure = (myDoublyLinkedList) => {
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