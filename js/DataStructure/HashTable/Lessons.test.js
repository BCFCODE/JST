import { describe } from "vitest";
import HashTable from "./Lessons";
import { constructorTests, setTests } from "./tests";

describe(`HashTable`, () => {
  constructorTests(HashTable)
  setTests(HashTable)
})

