import { describe } from "vitest"
import { checkGRInternalStructure, executeTestCases, toEqualTests } from "../../../../utils"
import CorrectGraph from "../Correct"
import { removeEdgeDescription } from "../descriptions"

const validateOperations =
  ({ myGraph, vertexes, connectionEdges, removeEdges, returnValue }) => {
    let correct = new CorrectGraph()
    vertexes.forEach(vertex => correct.addVertex(vertex))
    connectionEdges.forEach(edges => correct.addEdge(...edges))
    let correctReturnValue = correct.removeEdge(...removeEdges)

    return [
      checkGRInternalStructure(myGraph),
      toEqualTests({ name: 'myGraph', my: myGraph, correct, paths: ['adjacencyList'] }),
      [
        ['\n\treturnValue', returnValue, 'toBe', correctReturnValue]
      ]
    ].flat()
  }

const tests = [
  {
    vertexes: ['A', 'B', 'C'],
    connectionEdges: [
      ['A', 'B'], ['B', 'C'], ['C', 'A']
    ],
    removeEdges: ['A', 'B']
  },
  {
    vertexes: ['A', 'B', 'C'], 
    connectionEdges: [
      ['A', 'B'], ['B', 'C'], ['C', 'A']
    ],
    removeEdges: ['A', 'D']
  },
]

const removeEdgeTests = (Graph) => {
  describe(`removeEdge`, () => {
    tests.forEach(({ vertexes, connectionEdges, removeEdges }) => {
      const description = removeEdgeDescription({ vertexes, connectionEdges, removeEdges })
      describe(description, () => {
        let myGraph = new Graph()
        vertexes.forEach(vertex => myGraph.addVertex(vertex))
        connectionEdges.forEach(edges => myGraph.addEdge(...edges))
        let returnValue = myGraph.removeEdge(...removeEdges)

        const tests = validateOperations({
          myGraph,
          vertexes,
          connectionEdges,
          removeEdges,
          returnValue
        })

        executeTestCases(tests)
      })
    })
  })
}

export default removeEdgeTests


