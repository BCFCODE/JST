import { describe } from "vitest";
import { LinkedList } from "../../../DSA/LL";
import { CorrectLinkedList } from "../correct/LL";
import { Tests } from "../../../utils";
import Random from "../../../utils/Random";

const random = new Random();

export default function Unshift() {
  describe("Before unshift()\n\tlet myLinkedList = new LinkedList();\n\tmyLinkedList.pop();", () => {
    let correct = new CorrectLinkedList();
    correct.pop();

    let myLinkedList = new LinkedList();
    myLinkedList.pop();

    const tests = new Tests({
      name: "myLinkedList",
      my: myLinkedList,
      correct,
    });
    const paths = {
      toBeNull: ["head", "tail"],
      toBe: ["length"],
    };
    tests.toBeNull(paths.toBeNull);
    tests.toBe(paths.toBe);
    tests.run();
  });

  describe("After first unshift()\n\tlet myLinkedList = new LinkedList();\n\tmyLinkedList.pop();\n\tconst unshiftReturnValue = myLinkedList.unshift(2)", () => {
    let correct = new CorrectLinkedList();
    correct.pop();
    const correctUnshiftReturnValue = correct.unshift(2);

    let myLinkedList = new LinkedList();
    myLinkedList.pop();
    const unshiftReturnValue = myLinkedList.unshift(2);

    const tests = new Tests({
      name: "myLinkedList",
      my: myLinkedList,
      correct,
    });
    const paths = {
      toBeNull: ["head.next", "tail.next"],
      toBe: ["head.value", "tail.value", "length"],
      toEqual: ["head", "tail"],
    };
    tests.toBeNull(paths.toBeNull);
    tests.toBe(paths.toBe);
    tests.toEqual(paths.toEqual);
    tests.checkLLInternalStructure();
    tests.extra = [
      [
        "\n\tunshiftReturnValue === correctUnshiftReturnValue",
        unshiftReturnValue,
        "toEqual",
        correctUnshiftReturnValue,
      ],
    ];
    tests.run();
  });

  describe("After second unshift()\n\tlet myLinkedList = new LinkedList();\n\tmyLinkedList.pop();\n\tmyLinkedList.unshift(2)\n\tconst unshiftValue = myLinkedList.unshift(1)", () => {
    let correct = new CorrectLinkedList();
    correct.pop();
    correct.unshift(2);
    const correctUnshiftReturnValue = correct.unshift(1);

    let myLinkedList = new LinkedList();
    myLinkedList.pop();
    myLinkedList.unshift(2);
    const unshiftReturnValue = myLinkedList.unshift(1);

    const tests = new Tests({
      name: "myLinkedList",
      my: myLinkedList,
      correct,
    });
    const paths = {
      toBeNull: ["head.next.next", "tail.next"],
      toBe: ["head.value", "head.next.value", "tail.value", "length"],
      toEqual: ["head", "head.next", "tail"],
    };
    tests.toBeNull(paths.toBeNull);
    tests.toBe(paths.toBe);
    tests.toEqual(paths.toEqual);
    tests.checkLLInternalStructure();
    tests.extra = [
      [
        "\n\tunshiftReturnValue === correctUnshiftReturnValue",
        unshiftReturnValue,
        "toEqual",
        correctUnshiftReturnValue,
      ],
    ];
    tests.run();
  });
}
