import { describe } from "vitest";
import HashTable from "./Lessons";
import { constructorTests, getTests, setTests } from "./tests";

describe(`HashTable`, () => {
  constructorTests(HashTable)
  setTests(HashTable)
  getTests(HashTable)
})

