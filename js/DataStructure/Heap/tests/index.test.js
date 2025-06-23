import { describe } from "vitest";
import Heap from "../Lessons";
import heapTests from ".";
import { Heap as HeapClassHelperMethodHeap } from "../Exercises/helper/heap";

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





