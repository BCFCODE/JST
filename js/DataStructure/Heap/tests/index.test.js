import { describe } from "vitest";
import heapTests from ".";
import { Heap as HeapClassLessons } from "../Lessons";
import {
  HeapClassHelperMethodHeap,
  HeapClassHelperMethodGetHeap,
  HeapClassHelperMethodLeftChild,
  HeapClassHelperMethodRightChild,
  HeapClassHelperMethodParent,
  HeapClassHelperMethodSwap,
  HeapClassHelperMethodAll,
  HeapClassInsert,
  HeapClassRemove,
  HeapClassHelperMethodSinkDown
} from "../Exercises";

const tests = [
  {
    description: 'Heap (Lessons)',
    Heap: HeapClassLessons
  },
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
  {
    description: 'EXERCISE-Heap-insert(index)',
    Heap: HeapClassInsert,
  },
  {
    description: 'EXERCISE-Heap-remove()',
    Heap: HeapClassRemove,
  },
  {
    description: 'EXERCISE-Heap-#sinkDown(index)',
    Heap: HeapClassHelperMethodSinkDown,
  },
]

tests.forEach(({ description, Heap }) => {
  describe(description, () => heapTests(Heap))
})




