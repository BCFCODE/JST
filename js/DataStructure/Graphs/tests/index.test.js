import { describe } from "vitest"
import {
  addVertexTests,
  addEdgeTests
} from '.'
import {
  AddEdgeGraphClass,
  AddVertexGraphClass,
} from "../Exercises"

const tests = [
  {
    describeText: 'EXERCISE-GR-addVertex',
    Graph: AddVertexGraphClass,
    tests: addVertexTests
  },
  {
    describeText: 'EXERCISE-GR-addEdge',
    Graph: AddEdgeGraphClass,
    tests: addEdgeTests
  },
]

tests.forEach(({ describeText, tests, Graph }) => {
  describe(describeText, () => tests(Graph))
})


