import { describe } from "vitest";
import { LinkedList } from "../../DSA/LL";
import { CorrectLinkedList } from "./correct/LL";
import { Tests } from "../../utils/tests/helper";

const Push = () => {
  describe("\n\tBefore push(value)\n\tlet myLinkedList = new LinkedList();\n\tmyLinkedList.pop(); (this.length = 0)", () => {
    const correct = new CorrectLinkedList();
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

  describe("\n\tAfter first push(value)\n\tlet myLinkedList = new LinkedList();\n\tmyLinkedList.push(7);", () => {
    let correct = new CorrectLinkedList();
    correct.pop();
    correct.push(7);

    let myLinkedList = new LinkedList();
    myLinkedList.pop();
    myLinkedList.push(7);

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
    tests.run();
  });

  describe("\n\tAfter second push(value)\n\tlet myLinkedList = new LinkedList();\n\t myLinkedList.pop();\n\tmyLinkedList.push(7)\n\tmyLinkedList.push(4)", () => {
    let correct = new LinkedList();
    correct.pop();
    correct.push(7);
    correct.push(4);

    let myLinkedList = new LinkedList();
    myLinkedList.pop();
    myLinkedList.push(7);
    myLinkedList.push(4);

    const tests = new Tests({
      name: "myLinkedList",
      my: myLinkedList,
      correct,
    });
    const paths = {
      toBeNull: ["tail.next", "head.next.next"],
      toBe: ["head.value", "tail.value", "length"],
      toEqual: ["head", "tail"],
    };
    tests.toBeNull(paths.toBeNull);
    tests.toBe(paths.toBe);
    tests.toEqual(paths.toEqual);
    tests.checkLLInternalStructure();
    tests.run();
  });
};

export default [Push];
