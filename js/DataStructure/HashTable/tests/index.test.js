import { describe } from "vitest"
import { constructorTests } from '.'
import { HashTableConstructor } from "../Exercises"

const tests = [
  {
    describeText: 'EXERCISE-HT-Constructor',
    HashTable: HashTableConstructor,
    tests: constructorTests
  },
]

tests.forEach(({ describeText, tests, HashTable }) => {
  describe(describeText, () => tests(HashTable))
}) 