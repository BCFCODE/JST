import { describe } from "vitest";
import { LinkedList } from "../../DSA/LL";
import { CorrectLinkedList } from "./correct/LL";
import { Tests } from "../../utils";

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

const Pop = () => {
  describe("Before pop()\n\tconst myLinkedList = new LinkedList(1);\n\tmyLinkedList.pop(2);", () => {
    const correct = new LinkedList(1);
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
    let correct = new LinkedList(1);
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
    let correct = new LinkedList(1);
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
    let correct = new LinkedList(1);
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
};

const Unshift = () => {
  describe("Before unshift()\n\tlet myLinkedList = new LinkedList();\n\tmyLinkedList.pop();", () => {
    let correct = new LinkedList();
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
    let correct = new LinkedList();
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
    tests.manual = [
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
    let correct = new LinkedList();
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
    tests.manual = [
      [
        "\n\tunshiftReturnValue === correctUnshiftReturnValue",
        unshiftReturnValue,
        "toEqual",
        correctUnshiftReturnValue,
      ],
    ];
    tests.run();
  });
};

const Shift = () => {
  describe("Before shift()\n\tlet myLinkedList = new LinkedList(2);\n\tmyLinkedList.push(1);", () => {
    let correct = new LinkedList(2);
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
    let correct = new LinkedList(2);
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
    tests.manual = [
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
    let correct = new LinkedList(2);
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
    tests.manual = [
      [
        "\n\tshiftReturnValue",
        shiftReturnValue,
        "toEqual",
        correctShiftReturnValue,
      ],
    ];
    tests.run();
  });
};

export default [Push, Pop, Unshift, Shift];
