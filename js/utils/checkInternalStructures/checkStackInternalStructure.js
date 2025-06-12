import hasPropertyTests from "../tests/hasPropertyTests"

export const checkStackInternalStructure = (myStack) => {
  const nodeProperties = ['value', 'next']

  return [
    {
      name: 'myStack',
      obj: myStack,
      paths: ['top'],
      properties: nodeProperties
    },
    {
      name: 'myStack',
      obj: myStack,
      properties: ['top', 'length']
    }
  ].flatMap(test => hasPropertyTests(test))

}

export default checkStackInternalStructure