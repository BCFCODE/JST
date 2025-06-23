import { describe } from "vitest";
import Heap from "../Lessons";
import heapTests from ".";
import {
  HeapClassHelperMethodHeap
} from "../Exercises";

const tests = [
  { description: 'Heap (Lessons)', Heap },
  {
    description: 'EXERCISE-Heap-#heap',
    Heap: HeapClassHelperMethodHeap,
  },
]

tests.forEach(({ description, Heap }) => {
  describe(description, () => heapTests(Heap))
})





