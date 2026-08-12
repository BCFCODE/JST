import { describe } from "vitest";
import { DoublyLinkedList } from "../../../DSA/DLL";
import { CorrectDoublyLinkedList } from "../correct/DLL";
import { Tests } from "../../../utils";
import Random from "../../../utils/Random";

const random = new Random();

export default function Pop() {
  const length = 3;
  const [val1, val2, val3] = Array.from({ length }, (_, k) =>
    random.greaterThan(k),
  );

  const myDoublyLinkedList = new DoublyLinkedList(val1);
  const correct = new CorrectDoublyLinkedList(val1);

  describe("After using pop on an empty doubly linked list", () => {
    myDoublyLinkedList.pop();
    const popReturnValue = myDoublyLinkedList.pop();
    correct.pop();
    const correctPopReturnValue = correct.pop();

    const tests = new Tests({
      name: "myDoublyLinkedList",
      my: myDoublyLinkedList,
      correct,
    });
    const paths = {
      toBe: ["length"],
      toBeNull: ["head", "tail"],
    };
    tests.toBe(paths.toBe);
    tests.toBeNull(paths.toBeNull);
    tests.extra = [
      ["\n\tpopReturnValue", popReturnValue, "toBe", correctPopReturnValue],
    ];
    tests.run();
  });

  describe(`\n\tconst myDoublyLinkedList = new DoublyLinkedList(${val1})`, () => {
    describe("\n\tmyDoublyLinkedList.pop()\n\tAfter using pop on a doubly linked list that has only one node", () => {
      myDoublyLinkedList.push(val1);
      const popReturnValue = myDoublyLinkedList.pop();
      correct.push(val1);
      const correctPopReturnValue = correct.pop();

      const tests = new Tests({
        name: "myDoublyLinkedList",
        my: myDoublyLinkedList,
        correct,
      });
      const paths = {
        toBe: ["length"],
        toBeNull: ["head", "tail"],
      };
      tests.toBe(paths.toBe);
      tests.toBeNull(paths.toBeNull);
      tests.extra = [
        [
          "\n\tpopReturnValue",
          popReturnValue,
          "toEqual",
          correctPopReturnValue,
        ],
      ];
      tests.run();
    });

    describe(`\n\tmyDoublyLinkedList.push(${val2})\n\tmyDoublyLinkedList.pop()\n\tAfter using pop on a doubly linked list that has 2 nodes`, () => {
      myDoublyLinkedList.push(val1);
      myDoublyLinkedList.push(val2);
      const popReturnValue = myDoublyLinkedList.pop();
      correct.push(val1);
      correct.push(val2);
      const correctPopReturnValue = correct.pop();

      const tests = new Tests({
        name: "myDoublyLinkedList",
        my: myDoublyLinkedList,
        correct,
      });
      const paths = {
        toBe: ["length", "head.value", "tail.value"],
        toBeNull: ["head.prev", "head.next", "tail.next", "tail.prev"],
      };
      tests.toBe(paths.toBe);
      tests.toBeNull(paths.toBeNull);
      tests.extra = [
        [
          "\n\tpopReturnValue",
          popReturnValue,
          "toEqual",
          correctPopReturnValue,
        ],
      ];
      tests.run();
    });

    describe(`\n\tmyDoublyLinkedList.push(${val2})\n\tmyDoublyLinkedList.push(${val3})\n\tmyDoublyLinkedList.pop()\n\tAfter using pop on a doubly linked list that has 2 nodes`, () => {
      myDoublyLinkedList.push(val1);
      myDoublyLinkedList.push(val2);
      myDoublyLinkedList.push(val3);
      const popReturnValue = myDoublyLinkedList.pop();
      correct.push(val1);
      correct.push(val2);
      correct.push(val3);
      const correctPopReturnValue = correct.pop();

      const tests = new Tests({
        name: "myDoublyLinkedList",
        my: myDoublyLinkedList,
        correct,
      });
      const paths = {
        toBe: [
          "length",
          "head.value",
          "head.next.value",
          "tail.prev.value",
          "tail.value",
        ],
        toBeNull: ["head.prev", "tail.next"],
      };
      tests.toBe(paths.toBe);
      tests.toBeNull(paths.toBeNull);
      tests.extra = [
        [
          "\n\tpopReturnValue",
          popReturnValue,
          "toEqual",
          correctPopReturnValue,
        ],
      ];
      tests.run();
    });
  });
}
