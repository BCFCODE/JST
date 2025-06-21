import hasPropertyTests from "../tests/hasPropertyTests"

export const checkHTInternalStructure = (myHashTable) => [
  [
    ['\n\tArray.isArray(myHashTable.dataMap)', Array.isArray(myHashTable.dataMap), 'toBe', true],
    ['\n\tmyHashTable.dataMap.length > 0', myHashTable.dataMap.length > 0, 'toBe', true],
  ],
  [
    {
      name: 'myHashTable',
      obj: myHashTable,
      paths: ['dataMap'],
      properties: ['length']
    },
    {
      name: 'myHashTable',
      obj: myHashTable,
      properties: ['dataMap']
    }
  ]
    .flatMap(test => hasPropertyTests(test)),
].flat()


export default checkHTInternalStructure