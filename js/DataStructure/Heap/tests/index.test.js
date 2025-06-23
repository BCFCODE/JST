import { describe } from "vitest";
import Heap from "../Lessons";
import heapTests from ".";
import {
  HeapClassHelperMethodHeap,
  HeapClassHelperMethodGetHeap,
  HeapClassHelperMethodLeftChild,
  HeapClassHelperMethodRightChild,
  HeapClassHelperMethodParent,
  HeapClassHelperMethodSwap,
  HeapClassHelperMethodAll
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
    Heap: HeapClassHelperMethodLeftChild,
  },
  {
    description: 'EXERCISE-Heap-#rightChild(index)',
    Heap: HeapClassHelperMethodRightChild,
  },
  {
    description: 'EXERCISE-Heap-#parent(index)',
    Heap: HeapClassHelperMethodParent,
  },
  {
    description: 'EXERCISE-Heap-#swap(index1, index2)',
    Heap: HeapClassHelperMethodSwap,
  },
  {
    description: 'EXERCISE-Heap-all',
    Heap: HeapClassHelperMethodAll,
  },
]

tests.forEach(({ description, Heap }) => {
  describe(description, () => heapTests(Heap))
})





