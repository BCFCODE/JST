import { describe } from "vitest";
import { LinkedList } from "../../../DSA/LL";
import { CorrectLinkedList } from "../correct/LL";
import { Tests } from "../../../utils";
import Random from "../../../utils/Random";

const random = new Random();

export default function Pop() {
  describe("Before pop()\n\tconst myLinkedList = new LinkedList(1);\n\tmyLinkedList.pop(2);", () => {
    const correct = new CorrectLinkedList(1);
    correct.push(2);

    const myLinkedList = new LinkedList(1);
    myLinkedList.push(2);

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
    tests.run();
  });

  describe("After first pop()\n\tlet myLinkedList = new LinkedList(1);\n\tmyLinkedList.push(2);\n\tconst popReturnValue = myLinkedList.pop()", () => {
    let correct = new CorrectLinkedList(1);
    correct.push(2);
    const correctPopReturnValue = correct.pop();

    let myLinkedList = new LinkedList(1);
    myLinkedList.push(2);
    const popReturnValue = myLinkedList.pop();

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
    tests.manual = [
      [`\n\tpopReturnValue`, popReturnValue, "toEqual", correctPopReturnValue],
    ];
    tests.run();
  });

  describe("After second pop()\n\tlet myLinkedList = new LinkedList(1);\n\tmyLinkedList.push(2);\n\tmyLinkedList.pop()\n\tconst popReturnValue = myLinkedList.pop()", () => {
    let correct = new CorrectLinkedList(1);
    correct.push(2);
    correct.pop();
    const correctPopReturnValue = correct.pop();

    let myLinkedList = new LinkedList(1);
    myLinkedList.push(2);
    myLinkedList.pop();
    const popReturnValue = myLinkedList.pop();

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
    tests.manual = [
      [`\n\tpopReturnValue`, popReturnValue, "toEqual", correctPopReturnValue],
    ];
    tests.run();
  });

  describe("After third pop()\n\tlet myLinkedList = new LinkedList(1);\n\tmyLinkedList.push(2);\n\tmyLinkedList.pop()\n\tmyLinkedList.pop()\n\tconst popValue = myLinkedList.pop()", () => {
    let correct = new CorrectLinkedList(1);
    correct.push(2);
    correct.pop();
    correct.pop();
    const correctPopReturnValue = correct.pop();

    let myLinkedList = new LinkedList(1);
    myLinkedList.push(2);
    myLinkedList.pop();
    myLinkedList.pop();
    const popReturnValue = myLinkedList.pop();

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
    tests.manual = [
      [`\n\tpopReturnValue`, popReturnValue, "toBe", correctPopReturnValue],
    ];
    tests.run();
  });
}
