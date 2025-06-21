import { describe } from "vitest"
import { constructorTests, setTests, getTests } from '.'
import { HashTableConstructor, HashTableSet, HashTableGet } from "../Exercises"

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
  {
    describeText: 'EXERCISE-HT-Get',
    HashTable: HashTableGet,
    tests: getTests
  },
]

tests.forEach(({ describeText, tests, HashTable }) => {
  describe(describeText, () => tests(HashTable))
}) 