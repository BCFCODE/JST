export const constructorTests = (myDoublyLinkedList) => [
  [
    '\n\tmyDoublyLinkedList.head', myDoublyLinkedList.head, 'toEqual', {
      value: 7,
      next: null,
      prev: null
    }
  ],
  ['\n\tmyDoublyLinkedList.head.value', myDoublyLinkedList.head.value, 'toBe', 7],
  ['\n\tmyDoublyLinkedList.head.next', myDoublyLinkedList.head.next, 'toBeNull', null],
  ['\n\tmyDoublyLinkedList.head.prev', myDoublyLinkedList.head.prev, 'toBeNull', null],
  ['\n\tmyDoublyLinkedList.head === myDoublyLinkedList.tail', myDoublyLinkedList.head === myDoublyLinkedList.tail, 'toBe', true],
  [
    '\n\tmyDoublyLinkedList.tail', myDoublyLinkedList.tail, 'toEqual', {
      value: 7,
      next: null,
      prev: null
    }
  ],
  ['\n\tmyDoublyLinkedList.tail.value', myDoublyLinkedList.tail.value, 'toBe', 7],
  ['\n\tmyDoublyLinkedList.tail.next', myDoublyLinkedList.tail.next, 'toBeNull', null],
  ['\n\tmyDoublyLinkedList.tail.prev', myDoublyLinkedList.tail.prev, 'toBeNull', null],
  ["\n\tmyDoublyLinkedList.length", myDoublyLinkedList.length, 'toBe', 1],
]