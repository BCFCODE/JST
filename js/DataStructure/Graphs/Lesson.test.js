import { describe } from "vitest";
import Graph from "./Lessons";

import {
  addEdgeTests,
  addVertexTests,
  removeEdgeTests
} from "./tests";

describe(`Graphs`, () => {
  addVertexTests(Graph)
  addEdgeTests(Graph)
  removeEdgeTests(Graph)
})

