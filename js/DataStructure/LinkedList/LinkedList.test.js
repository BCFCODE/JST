import { LinkedList, Node } from "./LinkedList";
import { describe, it, expect } from "vitest";

describe(`LinkedList`, () => {
  describe(`\n\tlet myLinkedList = new LinkedList(4)\n\t`, () => {
    let myLinkedList = new LinkedList(4)
    it(`myLinkedList.length > 1`, () => {
      const expectedResult = 1
      const result = myLinkedList.length
      expect(result).toEqual(expectedResult)
    })
    it(`myLinkedList.head.value > 4`, () => {
      const expectedResult = 4
      const result = myLinkedList.head.value
      expect(result).toEqual(expectedResult)
    })
    it(`myLinkedList.head.next > null`, () => {
      const expectedResult = null
      const result = myLinkedList.head.next
      expect(result).toEqual(expectedResult)
    })
    it(`myLinkedList.head > { value: 4, next: null }`, () => {
      const expectedResult = { value: 4, next: null }
      const result = myLinkedList.head
      expect(result).toEqual(expectedResult)
    })
    it(`myLinkedList.tail.value > 4`, () => {
      const expectedResult = 4
      const result = myLinkedList.tail.value
      expect(result).toEqual(expectedResult)
    })
    it(`myLinkedList.tail.next > null`, () => {
      const expectedResult = null
      const result = myLinkedList.tail.next
      expect(result).toEqual(expectedResult)
    })
    it(`myLinkedList.tail > { value: 4, next: null }`, () => {
      const expectedResult = { value: 4, next: null }
      const result = myLinkedList.tail
      expect(result).toEqual(expectedResult)
    })
  })
})