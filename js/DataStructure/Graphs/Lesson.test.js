import { describe } from "vitest";
import Graph from "./Lessons";

import {
  addEdgeTests,
  addVertexTests
} from "./tests";

describe(`Graphs`, () => {
  addVertexTests(Graph)
  addEdgeTests(Graph)
})

