import { describe } from "vitest";
import BST, { Node } from "./Lessons";
import {
  constructorTests,
  containsTests,
  insertTests,
  rContainsTests
} from "./tests";

describe(`BST`, () => {
  constructorTests({ BST, Node })
  insertTests({ BST })
  containsTests({ BST })
  rContainsTests({ BST })
})

