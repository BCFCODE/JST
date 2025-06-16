import hasPropertyTests from "../tests/hasPropertyTests"

const checkLLInternalStructure = (myLinkedList) => {
  const nodeProperties = ['value', 'next']

  return [
    {
      name: 'myLinkedList',
      obj: myLinkedList,
      paths: ['head', 'tail'],
      properties: nodeProperties
    },
    {
      name: 'myLinkedList',
      obj: myLinkedList,
      properties: ['head', 'tail', 'length']
    }
  ].flatMap(test => hasPropertyTests(test))

}

export default checkLLInternalStructure