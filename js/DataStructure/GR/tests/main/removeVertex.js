import { describe } from "vitest"
import { checkGRInternalStructure, executeTestCases, toEqualTests } from "../../../../utils"
import CorrectGraph from "../Correct"
import { removeVertexDescription } from "../descriptions"

const validateOperations =
  ({ myGraph, vertexes, connectionEdges, removeValue, returnValue }) => {
    let correct = new CorrectGraph()
    vertexes.forEach(vertex => correct.addVertex(vertex))
    connectionEdges.forEach(edges => correct.addEdge(...edges))
    let correctReturnValue = correct.removeVertex(removeValue)

    return [
      checkGRInternalStructure(myGraph),
      toEqualTests({ name: 'myGraph', my: myGraph, correct, paths: ['adjacencyList'] }),
      [
        ['\n\treturnValue', returnValue, 'toEqual', correctReturnValue]
      ]
    ].flat()
  }

const tests = [
  {
    vertexes: ['A', 'B', 'C', 'D'],
    connectionEdges: [
      ['A', 'B'],
      ['A', 'C'],
      ['A', 'D'],
      ['B', 'D'],
      ['C', 'D']
    ],
    removeValue: "D"
  },
  {
    vertexes: ['A', 'B', 'C', 'D'],
    connectionEdges: [
      ['A', 'B'],
      ['A', 'C'],
      ['A', 'D'],
      ['B', 'D'],
      ['C', 'D']
    ],
    removeValue: "E"
  },
]

const removeVertexTests = (Graph) => {
  describe(`removeVertex`, () => {
    tests.forEach(({ vertexes, connectionEdges, removeValue }) => {
      const description = removeVertexDescription({ vertexes, connectionEdges, removeValue })
      describe(description, () => {
        let myGraph = new Graph()
        vertexes.forEach(vertex => myGraph.addVertex(vertex))
        connectionEdges.forEach(edges => myGraph.addEdge(...edges))
        let returnValue = myGraph.removeVertex(removeValue)

        const tests = validateOperations({
          myGraph,
          vertexes,
          connectionEdges,
          removeValue,
          returnValue
        })

        executeTestCases(tests)
      })
    })
  })
}

export default removeVertexTests


