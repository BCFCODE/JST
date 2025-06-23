import { describe } from "vitest";
import { executeTestCases } from "../../../utils";
import Heap from "../Lessons";
import CorrectHeap from "./Correct";
import { insertDescription } from "./description";

const validateInsertOperations = ({ myHeap, values }) => {
  const correct = new CorrectHeap()
  values.forEach(value => correct.insert(value))

  return [
    ['\n\tmyHeap.getHeap()', myHeap.getHeap(), 'toEqual', correct.getHeap()]
  ]
}

const validateAfterFirstRemoveOperations =
  ({ myHeap, values, returnValue }) => {
    const correct = new CorrectHeap()
    values.forEach(value => correct.insert(value))
    const correctReturnValue = correct.remove()

    return [
      ['\n\tmyHeap.getHeap()', myHeap.getHeap(), 'toEqual', correct.getHeap()],
      ['\n\treturnValue', returnValue, 'toEqual', correctReturnValue]
    ]
  }

const validateAfterSecondRemoveOperations =
  ({ myHeap, values, returnValue }) => {
    const correct = new CorrectHeap()
    values.forEach(value => correct.insert(value))
    correct.remove()
    const correctReturnValue = correct.remove()

    return [
      ['\n\tmyHeap.getHeap()', myHeap.getHeap(), 'toEqual', correct.getHeap()],
      ['\n\treturnValue', returnValue, 'toEqual', correctReturnValue]
    ]
  }

const testValues = [
  [99, 72, 61, 58],
  [99, 72, 61, 58, 100],
  [99, 72, 61, 58, 100, 75],
  [99, 72, 61, 58, 100, 75, 3, 0, 23],
]

describe(`Helper Methods`, () => {
  testValues.forEach((values) => {
    const description = insertDescription(values)
    describe(description, () => {
      let myHeap = new Heap()
      values.forEach(value => myHeap.insert(value))

      const tests = validateInsertOperations({ myHeap, values })

      executeTestCases(tests)
    })
  })

  testValues.forEach((values) => {
    const description = insertDescription(values)
    describe(`After first remove${description}\n\tconst returnValue = myHeap.remove()`, () => {
      let myHeap = new Heap()
      values.forEach(value => myHeap.insert(value))
      const returnValue = myHeap.remove()

      const tests = validateAfterFirstRemoveOperations({ myHeap, values, returnValue })

      executeTestCases(tests)
    })
  })

  testValues.forEach((values) => {
    const description = insertDescription(values)
    describe(`After second remove${description}\n\tconst returnValue = myHeap.remove()`, () => {
      let myHeap = new Heap()
      values.forEach(value => myHeap.insert(value))
      myHeap.remove()
      const returnValue = myHeap.remove()

      const tests = validateAfterSecondRemoveOperations({ myHeap, values, returnValue })

      executeTestCases(tests)
    })
  })

})





