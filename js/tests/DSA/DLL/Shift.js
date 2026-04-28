import { describe } from "vitest";
import { DoublyLinkedList } from "../../../DSA/DLL";
import { CorrectDoublyLinkedList } from "../correct/DLL";
import { Tests } from "../../../utils";
import Random from "../../../utils/Random";

const random = new Random();

export default function Shift() {
  const length = 2;
  const [val1, val2] = Array.from({ length }, (_, k) => random.greaterThan(k));

  describe(`After using shift on an empty doubly linked list\n\tconst shiftReturnValue = myDoublyLinkedList.shift();`, () => {
    const myDoublyLinkedList = new DoublyLinkedList(val1);
    myDoublyLinkedList.pop();
    const shiftReturnValue = myDoublyLinkedList.shift();

    const correct = new CorrectDoublyLinkedList(val1);
    correct.pop();
    const correctShiftReturnValue = correct.shift();

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

  describe(`After using shift on a NONE-EMPTY doubly linked list (length === 1)\n\tconst myDoublyLinkedList = new DoublyLinkedList(${val1});\n\tconst shiftReturnValue = myDoublyLinkedList.shift();`, () => {
    const myDoublyLinkedList = new DoublyLinkedList(val1);
    const shiftReturnValue = myDoublyLinkedList.shift();

    const correct = new CorrectDoublyLinkedList(val1);
    const correctShiftReturnValue = correct.shift();

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

//   describe(`After using shift on a NONE-EMPTY doubly linked list (length > 1)\n\tconst myDoublyLinkedList = new DoublyLinkedList(${val1});\n\tmyDoublyLinkedList.push(${val2})\n\tconst shiftReturnValue = myDoublyLinkedList.shift();`, () => {
//     const myDoublyLinkedList = new DoublyLinkedList(val1);
//     myDoublyLinkedList.push(val2);
//     const shiftReturnValue = myDoublyLinkedList.shift();

//     const correct = new CorrectDoublyLinkedList(val1);
//     correct.push(val2);
//     const correctShiftReturnValue = correct.shift();

//     const tests = new Tests({
//       name: "myDoublyLinkedList",
//       my: myDoublyLinkedList,
//       correct,
//     });
//     const paths = {
//       toBe: ["length", "head.value", "tail.value"],
//       toBeNull: ["head.prev", "tail.next"],
//     };
//     tests.checkDLLInternalStructure();
//     tests.toBe(paths.toBe);
//     tests.toBeNull(paths.toBeNull);
//     tests.manual = [
//       [
//         "\n\tshiftReturnValue",
//         shiftReturnValue,
//         "toEqual",
//         correctShiftReturnValue,
//       ],
//     ];
//     tests.run();
//   });
}
