import hasPropertyTests from "../tests/hasPropertyTests"

const checkDLLInternalStructure = (myDoublyLinkedList) => {
  const nodeProperties = ['value', 'prev', 'next']

  return [
    {
      name: 'myDoublyLinkedList',
      obj: myDoublyLinkedList,
      paths: ['head', 'tail'],
      properties: nodeProperties
    },
    {
      name: 'myDoublyLinkedList',
      obj: myDoublyLinkedList,
      properties: ['head', 'tail', 'length']
    }
  ].flatMap(test => hasPropertyTests(test))

}

export default checkDLLInternalStructure