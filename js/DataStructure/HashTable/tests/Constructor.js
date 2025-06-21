import { describe } from "vitest"
import { checkHTInternalStructure, executeTestCases } from "../../../utils"

export const validateConstructorOperations = (myHashTable) => [
  checkHTInternalStructure(myHashTable),
  [
    ['\n\tArray.isArray(myHashTable.dataMap)', Array.isArray(myHashTable.dataMap), 'toBe', true],
    ['\n\tmyHashTable.dataMap.length > 0', myHashTable.dataMap.length > 0, 'toBe', true],
  ]
].flat()


const constructorTests = (HashTable) => {
  describe(`constructor`, () => {
    describe(`\n\tlet myHashTable = new HashTable()`, () => {
      let myHashTable = new HashTable()

      const tests = validateConstructorOperations(myHashTable)

      executeTestCases(tests)
    })
  })
}

export default constructorTests


