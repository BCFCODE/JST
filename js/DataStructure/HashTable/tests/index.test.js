import { describe } from "vitest"
import {
  constructorTests,
  setTests,
  getTests,
  keysTests,
} from '.'
import {
  HashTableConstructor,
  HashTableSet,
  HashTableGet,
  HashTableKeys
} from "../Exercises"

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
  {
    describeText: 'EXERCISE-HT-Keys',
    HashTable: HashTableKeys,
    tests: keysTests
  },
]

tests.forEach(({ describeText, tests, HashTable }) => {
  describe(describeText, () => tests(HashTable))
}) 