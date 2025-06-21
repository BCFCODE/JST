import { describe } from "vitest"
import { checkHTInternalStructure, executeTestCases, J } from "../../../utils"
import CorrectHashTable from "./Correct"
import { toEqualDataMapTests } from "./dataMapTests"

export const validateKeysOperations = ({ myHashTable, returnValue }) => {
  let correct = new CorrectHashTable()
  correct.set('bolts', 1400)
  correct.set('washers', 50)
  const correctReturnValue = correct.keys()

  return [
    checkHTInternalStructure(myHashTable),
    toEqualDataMapTests({ myHashTable, correct }),
    [
      ['\n\treturnValue', returnValue, 'toEqual', correctReturnValue]
    ]
  ].flat()
}

const keysTests = (HashTable) => {
  describe(`keys`, () => {

    describe(`\n\tlet myHashTable = new HashTable()\n\t myHashTable.set('bolts', 1400)\n\tmyHashTable.set('washers', 50)\n\tconst returnValue = myHashTable.keys()`, () => {

      let myHashTable = new HashTable()
      myHashTable.set('bolts', 1400)
      myHashTable.set('washers', 50)
      const returnValue = myHashTable.keys()

      const tests = validateKeysOperations({ myHashTable, returnValue })

      executeTestCases(tests)
    })

  })
}

export default keysTests


