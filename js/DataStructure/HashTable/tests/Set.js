import { describe } from "vitest"
import { checkHTInternalStructure, executeTestCases } from "../../../utils"
import CorrectHashTable from "./Correct"
import { toEqualDataMapTests } from "./dataMapTests"

export const validateSetOperations = ({ myHashTable, returnValue }) => {
  let correct = new CorrectHashTable()
  correct.set('lumber', 70)
  correct.set('washers', 50)
  const correctReturnValue = correct.set('bolts', 1400)

  return [
    checkHTInternalStructure(myHashTable),
    toEqualDataMapTests({ myHashTable, correct }),
    [
      ['\n\treturnValue', returnValue, 'toEqual', correctReturnValue]
    ]
  ].flat()
}

const setTests = (HashTable) => {
  describe(`set`, () => {
    describe(`\n\tlet myHashTable = new HashTable()\n\tmyHashTable.set('lumber', 70)\n\tmyHashTable.set('washers', 50)\n\tconst returnValue = myHashTable.set('bolts', 1400)`, () => {
      let myHashTable = new HashTable()
      myHashTable.set('lumber', 70)
      myHashTable.set('washers', 50)
      const returnValue = myHashTable.set('bolts', 1400)
      
      const tests = validateSetOperations({ myHashTable, returnValue })

      executeTestCases(tests)
    })
  })
}

export default setTests


