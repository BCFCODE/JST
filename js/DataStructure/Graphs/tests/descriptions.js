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

export const removeEdgeDescription = ({ vertexes, connectionEdges, removeEdges }) => {

  const addVertexText =
    vertexes.map((vertex) =>
      `\n\tmyGraph.addVertex(${J(vertex)})`
    ).join``

  const addEdgeText =
    connectionEdges.map((edges) =>
      `\n\tmyGraph.addEdge(${formatArgsForDisplay(edges)})`
    ).join``

  return `\n\tlet myGraph = new Graph()${addVertexText}${addEdgeText}\n\tconst returnValue = myGraph.removeEdge(${formatArgsForDisplay(removeEdges)})`
}
