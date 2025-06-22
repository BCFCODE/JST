
export const checkGRInternalStructure = (myGraph) => [
  [`\n\tmyGraph.hasOwnProperty('adjacencyList')`, myGraph.hasOwnProperty('adjacencyList'), 'toBe', true],
]


export default checkGRInternalStructure