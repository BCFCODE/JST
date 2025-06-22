import { formatArgsForDisplay, J } from "../../../utils"

export const addVertexDescription = (vertexes) => {
  const addVertexText = vertexes.map((vertex, index, arr) => {
    const isLast = index === arr.length - 1
    return `\n\t${isLast ? 'const returnValue = ' : ''}myGraph.addVertex(${J(vertex)})`
  }).join``
  return `\n\tlet myGraph = new Graph()${addVertexText}`
}

export const addEdgeDescription = ({ vertexes, edges }) => {
  const addVertexText =
    vertexes.map((vertex) =>
      `\n\tmyGraph.addVertex(${J(vertex)})`
    ).join``
  return `\n\tlet myGraph = new Graph()${addVertexText}\n\tconst returnValue = myGraph.addEdge(${formatArgsForDisplay(edges)})`
}
