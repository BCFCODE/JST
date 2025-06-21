import { describe } from "vitest"
import { checkHTInternalStructure, executeTestCases, J } from "../../../../utils"
import CorrectHashTable from "../Correct"
import { toEqualDataMapTests } from "../dataMapTests"

export const validateGetOperations = ({ myHashTable, returnValue, key }) => {
  let correct = new CorrectHashTable()
  correct.set('bolts', 1400)
  correct.set('washers', 50)
  const correctReturnValue = correct.get(key)

  return [
    checkHTInternalStructure(myHashTable),
    toEqualDataMapTests({ myHashTable, correct }),
    [
      ['\n\treturnValue', returnValue, 'toEqual', correctReturnValue]
    ]
  ].flat()
}

const getTests = (HashTable) => {
  describe(`set`, () => {

    ['bolts', 'washers', 'lumber'].forEach(key => {

      describe(`\n\tlet myHashTable = new HashTable()\n\t myHashTable.set('bolts', 1400)\n\tmyHashTable.set('washers', 50)\n\tconst returnValue = myHashTable.get(${J(key)})`, () => {

        let myHashTable = new HashTable()
        myHashTable.set('bolts', 1400)
        myHashTable.set('washers', 50)
        const returnValue = myHashTable.get(key)

        const tests = validateGetOperations({ myHashTable, returnValue, key })

        executeTestCases(tests)
      })

    })

  })
}

export default getTests


