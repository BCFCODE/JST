import hasPropertyTests from "../tests/hasPropertyTests"

export const checkQueueInternalStructure = (myQueue) => {
  const nodeProperties = ['value', 'next']

  return [
    {
      name: 'myQueue',
      obj: myQueue,
      paths: ['first', 'last'],
      properties: nodeProperties
    },
    {
      name: 'myQueue',
      obj: myQueue,
      properties: ['first', 'last', 'length']
    }
  ].flatMap(test => hasPropertyTests(test))

}

export default checkQueueInternalStructure