import { describe } from "vitest"
import { checkHTInternalStructure, executeTestCases } from "../../../utils"
import CorrectHashTable from "./Correct"
import { toEqualDataMapTests } from "./dataMapTests"

const keyValues = [
  [
    ['bolts', 1400],
    ['washers', 50]
  ],
  [
    ['bolts', 1400],
    ['washers', 50],
    ['lumber', 70]
  ]
]

export const validateSetOperations =
  ({ myHashTable, returnValue, keyValue }) => {
    let correct = new CorrectHashTable();

    keyValue.forEach(([key, value]) => correct.set(key, value));

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

    keyValues.forEach((keyValue) => {

      describe(`\n\tlet myHashTable = new HashTable()\n\tmyHashTable.set('bolts', 1400)\n\tmyHashTable.set('washers', 50)\n\tconst returnValue = myHashTable.keys()`, () => {
        let myHashTable = new HashTable();

        keyValue.forEach(([key, value]) => myHashTable.set(key, value));

        const returnValue = myHashTable.set('bolts', 1400)

        const tests = validateSetOperations({ myHashTable, returnValue, keyValue })

        executeTestCases(tests)
      })

    })

  })
}

export default setTests


