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

export default checkDLLInternalStructure