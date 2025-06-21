import { describe } from "vitest"
import { constructorTests, setTests } from '.'
import { HashTableConstructor, HashTableSet } from "../Exercises"

const tests = [
  {
    describeText: 'EXERCISE-HT-Constructor',
    HashTable: HashTableConstructor,
    tests: constructorTests
  },
  {
    describeText: 'EXERCISE-HT-Set',
    HashTable: HashTableSet,
    tests: setTests
  },
]

tests.forEach(({ describeText, tests, HashTable }) => {
  describe(describeText, () => tests(HashTable))
}) 