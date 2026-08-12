import { describe } from "vitest"
import { checkGRInternalStructure, executeTestCases, toEqualTests } from "../../../../utils"
import CorrectGraph from "../Correct"
import { addVertexDescription } from "../descriptions"

const validateOperations = ({ myGraph, vertexes, returnValue }) => {
  const correct = new CorrectGraph()
  let correctReturnValue;
  vertexes.forEach(vertex => {
    correctReturnValue = correct.addVertex(vertex)
  })
 
  return [ 
    checkGRInternalStructure(myGraph),
    toEqualTests({ name: 'myGraph', my: myGraph, correct, paths: ['adjacencyList'] }),
    [
      ['\n\treturnValue', returnValue, 'toBe', correctReturnValue]
    ]
  ].flat()
}

const vertexTests = [
  ['A'],
  ['A', 'A'],
  ['A', 'B', 'C', 'A', 'D'],
  ['A', 'B', 'C', 'A', 'D', 'A', 'B', 'C'],
]

const addVertexTests = (Graph) => {
  describe(`addVertex`, () => {
    vertexTests.forEach((vertexes) => {
      const description = addVertexDescription(vertexes)
      describe(description, () => {
        let myGraph = new Graph()
        let returnValue;
        vertexes.forEach(vertex => {
          returnValue = myGraph.addVertex(vertex)
        })

        const tests = validateOperations({ myGraph, vertexes, returnValue })

        executeTestCases(tests)
      })
    })
  })
}

export default addVertexTests


