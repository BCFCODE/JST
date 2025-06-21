import { describe } from "vitest"
import { checkHTInternalStructure, executeTestCases } from "../../../utils"

export const validateConstructorOperations = (myHashTable) => [
  checkHTInternalStructure(myHashTable),
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


