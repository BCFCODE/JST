import { describe } from "vitest"
import {
  addVertexTests,
  addEdgeTests,
  removeEdgeTests
} from '.'
import {
  AddEdgeGraphClass,
  AddVertexGraphClass,
  RemoveEdgeGraphClass
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
  {
    describeText: 'EXERCISE-GR-removeEdge',
    Graph: RemoveEdgeGraphClass,
    tests: removeEdgeTests
  },
]

tests.forEach(({ describeText, tests, Graph }) => {
  describe(describeText, () => tests(Graph))
})


