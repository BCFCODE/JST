import { describe } from "vitest";
import Graph from "./Lessons";

import {
  addVertexTests
} from "./tests";

describe(`Graphs`, () => {
  addVertexTests(Graph)
})

