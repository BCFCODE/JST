import { describe } from "vitest";
import { LinkedList } from "../../../DSA/LL";
import { CorrectLinkedList } from "../correct/LL";
import { Tests } from "../../../utils";
import Random from "../../../utils/Random";
import Pop from "./Pop";
import Push from "./Push";
import Unshift from "./Unshift";

const random = new Random();

export default function Shift() {
  describe("Before shift()\n\tlet myLinkedList = new LinkedList(2);\n\tmyLinkedList.push(1);", () => {
    let correct = new CorrectLinkedList(2);
    correct.push(1);

    let myLinkedList = new LinkedList(2);
    myLinkedList.push(1);

    const tests = new Tests({
      name: "myLinkedList",
      my: myLinkedList,
      correct,
    });
    const paths = {
      toBeNull: ["head.next.next", "tail.next"],
      toBe: ["head.value", "tail.value", "length"],
      toEqual: ["head", "head.next", "tail"],
    };
    tests.toBeNull(paths.toBeNull);
    tests.toBe(paths.toBe);
    tests.toEqual(paths.toEqual);
    tests.checkLLInternalStructure();
    tests.run();
  });

  describe("After first shift()\n\tlet myLinkedList = new LinkedList(2);\n\tmyLinkedList.push(1);\n\tconst shiftReturnValue = myLinkedList.shift();", () => {
    let correct = new CorrectLinkedList(2);
    correct.push(1);
    const correctShiftReturnValue = correct.shift();

    let myLinkedList = new LinkedList(2);
    myLinkedList.push(1);
    const shiftReturnValue = myLinkedList.shift();

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
        "\n\tshiftReturnValue",
        shiftReturnValue,
        "toEqual",
        correctShiftReturnValue,
      ],
    ];
    tests.run();
  });

  describe("After second shift()\n\tlet myLinkedList = new LinkedList(2);\n\tmyLinkedList.push(1);\n\tmyLinkedList.shift();\n\tconst shiftReturnValue = myLinkedList.shift();", () => {
    let correct = new CorrectLinkedList(2);
    correct.push(1);
    correct.shift();
    correct.shift();
    const correctShiftReturnValue = correct.shift();

    let myLinkedList = new LinkedList(2);
    myLinkedList.push(1);
    myLinkedList.shift();
    myLinkedList.shift();
    const shiftReturnValue = myLinkedList.shift();

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
    tests.extra = [
      [
        "\n\tshiftReturnValue",
        shiftReturnValue,
        "toEqual",
        correctShiftReturnValue,
      ],
    ];
    tests.run();
  });
}
