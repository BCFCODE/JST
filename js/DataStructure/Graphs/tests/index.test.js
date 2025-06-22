import { describe } from "vitest"
import {
  addVertexTests,
} from '.'
import {
  AddVertexGraphClass,
} from "../Exercises"

const tests = [
  {
    describeText: 'EXERCISE-HT-Constructor',
    Graph: AddVertexGraphClass,
    tests: addVertexTests
  },
]

tests.forEach(({ describeText, tests, Graph }) => {
  describe(describeText, () => tests(Graph))
})


