import { describe } from "vitest";
import HashTable from "./Lessons";
import { constructorTests, getTests, setTests } from "./tests";
import keysTests from "./tests/Keys";

describe(`HashTable`, () => {
  constructorTests(HashTable)
  setTests(HashTable)
  getTests(HashTable)
  keysTests(HashTable)
})

