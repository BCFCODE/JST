import { describe } from "vitest"
import {
  addVertexTests,
  addEdgeTests,
  removeEdgeTests,
  removeVertexTests
} from '.'
import {
  AddEdgeGraphClass,
  AddVertexGraphClass,
  RemoveEdgeGraphClass,
  RemoveVertexGraphClass
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
  {
    describeText: 'EXERCISE-GR-removeVertex',
    Graph: RemoveVertexGraphClass,
    tests: removeVertexTests
  },
]

tests.forEach(({ describeText, tests, Graph }) => {
  describe(describeText, () => tests(Graph))
})


