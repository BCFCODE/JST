import { describe } from "vitest";
import { DoublyLinkedList } from "../../../DSA/DLL";
import { CorrectDoublyLinkedList } from "../correct/DLL";
import { Tests } from "../../../utils";
import Random from "../../../utils/Random";

const random = new Random();

export default function Push() {
  const oldValue = "Old Value";
  const newValue = "New Value";

  describe(`\n\tAfter push "${newValue}" to an empty doubly linked list\n\tlet myDoublyLinkedList = new DoublyLinkedList();\n\tmyLinkedList.pop();\n\tconst pushReturnValue = myDoublyLinkedList.push("${newValue}");`, () => {
    let myDoublyLinkedList = new DoublyLinkedList();
    myDoublyLinkedList.pop();
    const pushReturnValue = myDoublyLinkedList.push(newValue);

    const correct = new CorrectDoublyLinkedList();
    correct.pop();
    const correctReturnPushValue = correct.push(newValue);

    const tests = new Tests({
      name: "myDoublyLinkedList",
      my: myDoublyLinkedList,
      correct,
    });
    const paths = {
      toBeNull: ["head.next", "tail.next"],
      toBe: ["head.value", "tail.value", "length"],
      toEqual: ["head", "tail"],
    };
    tests.checkDLLInternalStructure();
    tests.toBeNull(paths.toBeNull);
    tests.toBe(paths.toBe);
    tests.toEqual(paths.toEqual);
    tests.extra = [
      [
        "\n\tpushReturnValue",
        pushReturnValue,
        "toEqual",
        correctReturnPushValue,
      ],
    ];
    tests.run();
  });

  describe(`\n\tAfter push "${newValue}" to NONE-EMPTY doubly linked list\n\tlet myDoublyLinkedList = new DoublyLinkedList("${oldValue}");\n\tconst pushReturnValue = myDoublyLinkedList.push("${newValue}");`, () => {
    let myDoublyLinkedList = new DoublyLinkedList(oldValue);
    const pushReturnValue = myDoublyLinkedList.push(newValue);

    const correct = new CorrectDoublyLinkedList(oldValue);
    const correctReturnPushValue = correct.push(newValue);

    const tests = new Tests({
      name: "myDoublyLinkedList",
      my: myDoublyLinkedList,
      correct,
    });
    const paths = {
      toBeNull: ["head.next.next", "tail.next"],
      toBe: [
        "head.value",
        "head.next.value",
        "tail.prev.value",
        "tail.value",
        "length",
      ],
    };
    tests.checkDLLInternalStructure();
    tests.toBeNull(paths.toBeNull);
    tests.toBe(paths.toBe);
    tests.run();
  });
}
