class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
      return true
    }
    return false
  }

  /// WRITE addEdge METHOD HERE ///
  //                             //
  //                             //
  //                             //
  //                             //
  /////////////////////////////////
}

export default Graph