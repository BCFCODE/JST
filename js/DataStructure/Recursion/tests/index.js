import { describe } from "vitest";
import { executeTestCases } from "../../../utils";
import { factorial as correctFactorial } from "./Correct";

const validateFactorialOperations = ({ value, returnValue }) => {
  const correctReturnValue = correctFactorial(value)

  return [
    ['\n\treturnValue', returnValue, 'toBe', correctReturnValue]
  ]
}


const factorialTests = [...new Set(
  Array.from(
    { length: 20 }, (_, k) => Math.floor(Math.random() * k) + 1
  )
)]

const recursionTests = (fn) => {

  factorialTests.forEach((value) => {
    describe(`\n\tconst returnValue = factorial(${value})`, () => {
      const returnValue = fn(value)

      const tests = validateFactorialOperations({ value, returnValue })

      executeTestCases(tests)
    })
  })

}

export default recursionTests




