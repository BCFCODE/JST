import { describe } from "vitest";
import Heap from "../Lessons";
import heapTests from ".";
import {
  HeapClassHelperMethodHeap,
  HeapClassHelperMethodGetHeap
} from "../Exercises";

const tests = [
  { description: 'Heap (Lessons)', Heap },
  {
    description: 'EXERCISE-Heap-#heap',
    Heap: HeapClassHelperMethodHeap,
  },
  {
    description: 'EXERCISE-Heap-getHeap()',
    Heap: HeapClassHelperMethodGetHeap,
  },
  {
    description: 'EXERCISE-Heap-#leftChild(index)',
    Heap: HeapClassHelperMethodGetHeap,
  },
]

tests.forEach(({ description, Heap }) => {
  describe(description, () => heapTests(Heap))
})





