export const checkStackInternalStructure = (myStack) => {
  const nodeProperties = ['value', 'next']
  
  const topPropertyTests = nodeProperties.map(property =>
    [
      `\n\tmyStack.top.hasOwnProperty(${property})`,
      myStack.top.hasOwnProperty(property), 'toBe', true
    ]
  )

  const myStackPropertyTests =
    ['top', 'length'].map(property =>
      [
        `\n\tmyStack.hasOwnProperty(${property})`,
        myStack.hasOwnProperty(property), 'toBe', true
      ]
    )

  return [...myStackPropertyTests, ...topPropertyTests]
}

export default checkStackInternalStructure