import { describe } from "vitest";
import BST, { Node } from "./Lessons";
import { constructorTests } from "./tests";

describe(`BST`, () => {
  constructorTests({ BST, Node })
})

