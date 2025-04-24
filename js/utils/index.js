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

export const checkLLInternalStructure = (myLinkedList) => {
  const nodeProperties = ['value', 'next']
  const headPropertyTests = nodeProperties.map(property =>
    [
      `\n\tmyLinkedList.head.hasOwnProperty(${property})`,
      myLinkedList.head.hasOwnProperty(property), 'toBe', true
    ]
  )
  const tailPropertyTests = nodeProperties.map(property =>
    [
      `\n\tmyLinkedList.tail.hasOwnProperty(${property})`,
      myLinkedList.tail.hasOwnProperty(property), 'toBe', true
    ]
  )

  const myLinkedListPropertyTests =
    ['head', 'tail', 'length'].map(property =>
      [
        `\n\tmyLinkedList.hasOwnProperty(${property})`,
        myLinkedList.hasOwnProperty(property), 'toBe', true
      ]
    )

  return [...myLinkedListPropertyTests, ...headPropertyTests, ...tailPropertyTests]
}

export const checkDLLInternalStructure = (myLinkedList) => {
  const nodeProperties = ['value', 'prev', 'next']
  const headPropertyTests = nodeProperties.map(property =>
    [
      `\n\tmyLinkedList.head.hasOwnProperty(${property})`,
      myLinkedList.head.hasOwnProperty(property), 'toBe', true
    ]
  )
  const tailPropertyTests = nodeProperties.map(property =>
    [
      `\n\tmyLinkedList.tail.hasOwnProperty(${property})`,
      myLinkedList.tail.hasOwnProperty(property), 'toBe', true
    ]
  )

  const myLinkedListPropertyTests =
    ['head', 'tail', 'length'].map(property =>
      [
        `\n\tmyLinkedList.hasOwnProperty(${property})`,
        myLinkedList.hasOwnProperty(property), 'toBe', true
      ]
    )

  return [...myLinkedListPropertyTests, ...headPropertyTests, ...tailPropertyTests]
}