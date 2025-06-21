import hasPropertyTests from "../tests/hasPropertyTests"

export const checkHTInternalStructure = (myHashTable) => [
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
  .flatMap(test => hasPropertyTests(test))



export default checkHTInternalStructure