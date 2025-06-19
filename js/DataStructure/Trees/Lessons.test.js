import { describe } from "vitest";
import BST, { Node } from "./Lessons";
import { constructorTests, insertTests } from "./tests";

describe(`BST`, () => {
  constructorTests({ BST, Node })
  insertTests({ BST })
})

