import { describe } from "vitest"
import { checkGRInternalStructure, executeTestCases, toEqualTests } from "../../../../utils"
import CorrectGraph from "../Correct"
import { addEdgeDescription } from "../descriptions"

const validateAddVertexOperations = ({ myGraph, vertexes, edges, returnValue }) => {
  const correct = new CorrectGraph()
  vertexes.forEach(vertex => correct.addVertex(vertex))
  let correctReturnValue = correct.addEdge(...edges)

  return [ 
    checkGRInternalStructure(myGraph),
    toEqualTests({ name: 'myGraph', my: myGraph, correct, paths: ['adjacencyList'] }),
    [
      ['\n\treturnValue', returnValue, 'toBe', correctReturnValue]
    ]
  ].flat()
}

const tests = [
  [[1, 2], [1, 2]],
  [[1, 2], [1, 3]],
  [['A', 'B'], ['B', 'A']],
  [['A', 'B', 'C', 'D'], ['D', 'A']],
  [['A', 'B', 'C', 'D'], ['D', 'F']],
]

const addEdgeTests = (Graph) => {
  describe(`addEdge`, () => {
    tests.forEach(([vertexes, edges]) => {
      const description = addEdgeDescription({ vertexes, edges })
      describe(description, () => {
        let myGraph = new Graph()
        vertexes.forEach(vertex => myGraph.addVertex(vertex))
        let returnValue = myGraph.addEdge(...edges)

        const tests = validateAddVertexOperations({ myGraph, vertexes, edges, returnValue })

        executeTestCases(tests)
      })
    })
  })
}

export default addEdgeTests


