import { describe } from "vitest";
import { DoublyLinkedList } from "../../../DSA/DLL";
import { CorrectDoublyLinkedList } from "../correct/DLL";
import { Tests } from "../../../utils";
import Random from "../../../utils/Random";

const random = new Random();

export default function Unshift() {
  const length = 2;
  const [val1, val2] = Array.from({ length }, (_, k) => random.greaterThan(k));

  describe(`After using unshift on an empty doubly linked list\n\tconst unshiftReturnValue = myDoublyLinkedList.unshift(${val1});`, () => {
    const myDoublyLinkedList = new DoublyLinkedList(val1);
    myDoublyLinkedList.pop();
    const unshiftReturnValue = myDoublyLinkedList.unshift(val1);

    const correct = new CorrectDoublyLinkedList(val1);
    correct.pop();
    const correctUnshiftReturnValue = correct.unshift(val1);

    const tests = new Tests({
      name: "myDoublyLinkedList",
      my: myDoublyLinkedList,
      correct,
    });
    const paths = {
      toBe: ["length", "head.value", "tail.value"],
      toEqual: ["head", "tail"],
      toBeNull: ["head.prev", "head.next", "tail.next", "tail.prev"],
    };
    tests.checkDLLInternalStructure();
    tests.toBe(paths.toBe);
    tests.toEqual(paths.toEqual);
    tests.toBeNull(paths.toBeNull);
    tests.extra = [
      [
        "\n\tunshiftReturnValue",
        unshiftReturnValue,
        "toEqual",
        correctUnshiftReturnValue,
      ],
    ];
    tests.run();
  });

  describe(`After using unshift on a NONE-EMPTY doubly linked list\n\tconst myDoublyLinkedList = new DoublyLinkedList(${val1});\n\tconst unshiftReturnValue = myDoublyLinkedList.unshift(${val2});`, () => {
    const myDoublyLinkedList = new DoublyLinkedList(val1);
    const unshiftReturnValue = myDoublyLinkedList.unshift(val2);

    const correct = new CorrectDoublyLinkedList(val1);
    const correctUnshiftReturnValue = correct.unshift(val2);

    const tests = new Tests({
      name: "myDoublyLinkedList",
      my: myDoublyLinkedList,
      correct,
    });
    const paths = {
      toBe: ["length", "head.value", "tail.value"],
      toBeNull: ["head.prev", "tail.next"],
    };
    tests.checkDLLInternalStructure();
    tests.toBe(paths.toBe);
    tests.toBeNull(paths.toBeNull);
    tests.run();
  });
}
