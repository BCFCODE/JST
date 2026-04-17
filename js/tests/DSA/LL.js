import { describe } from "vitest";
import { LinkedList } from "../../DSA/LL";
import { CorrectLinkedList } from "./correct/LL";

import {
  checkLLInternalStructure,
  executeTestCases,
  toBeNullTests,
  toBeTests,
  toEqualTests,
} from "../../utils";

const Push = () => {
  describe("\n\tBefore push(value)\n\tlet myLinkedList = new LinkedList();\n\tmyLinkedList.pop(); (this.length = 0)", () => {
    const correct = new CorrectLinkedList();
    correct.pop();

    let myLinkedList = new LinkedList();
    myLinkedList.pop();

    const target = { name: "myLinkedList", my: myLinkedList };

    const tests = [
      toBeNullTests({
        ...target,
        paths: ["head", "tail"],
      }),
      toBeTests({ ...target, paths: ["length"], correct }),
    ].flat();

    executeTestCases(tests);
  });

    describe("\n\tAfter first push(value)\n\tlet myLinkedList = new LinkedList();\n\tmyLinkedList.push(7);", () => {
      let myLinkedList = new LinkedList();
      myLinkedList.pop();
      const pushValue = myLinkedList.push(7);

      const tests = [
        ...checkLLInternalStructure(myLinkedList),
        // toBeNullTests({})
        [
          "myLinkedList.head",
          myLinkedList.head,
          "toEqual",
          {
            value: 7,
            next: null,
          },
        ],
        ["myLinkedList.head.next", myLinkedList.head.next, "toBeNull", null],
        ["myLinkedList.head.value", myLinkedList.head.value, "toBe", 7],
        [
          "myLinkedList.tail",
          myLinkedList.tail,
          "toEqual",
          {
            value: 7,
            next: null,
          },
        ],
        ["myLinkedList.tail.value", myLinkedList.tail.value, "toBe", 7],
        ["myLinkedList.tail.next", myLinkedList.tail.next, "toBeNull", null],
        ["pushValue === myLinkedList", pushValue === myLinkedList, "toBe", true],
        [
          "myLinkedList.head === myLinkedList.tail",
          myLinkedList.head === myLinkedList.tail,
          "toBe",
          true,
        ],
        ["myLinkedList.length", myLinkedList.length, "toBe", 1],
      ];

      executeTestCases(tests);
    });

  //   describe("\n\tAfter second push(value)\n\tlet myLinkedList = new LinkedList();\n\t myLinkedList.pop();\n\tmyLinkedList.push(7)\n\tmyLinkedList.push(4)", () => {
  //     let myLinkedList = new LinkedList();
  //     myLinkedList.pop();
  //     myLinkedList.push(7);
  //     const pushValue = myLinkedList.push(4);

  //     const tests = [
  //       ...checkLLInternalStructure(myLinkedList),
  //       [
  //         "myLinkedList.head",
  //         myLinkedList.head,
  //         "toEqual",
  //         {
  //           value: 7,
  //           next: {
  //             value: 4,
  //             next: null,
  //           },
  //         },
  //       ],
  //       [
  //         "myLinkedList.head.next.next",
  //         myLinkedList.head.next.next,
  //         "toBeNull",
  //         null,
  //       ],
  //       ["myLinkedList.head.value", myLinkedList.head.value, "toBe", 7],
  //       [
  //         "myLinkedList.tail",
  //         myLinkedList.tail,
  //         "toEqual",
  //         {
  //           value: 4,
  //           next: null,
  //         },
  //       ],
  //       ["myLinkedList.tail.value", myLinkedList.tail.value, "toBe", 4],
  //       ["myLinkedList.tail.next", myLinkedList.tail.next, "toBeNull", null],
  //       ["pushValue === myLinkedList", pushValue === myLinkedList, "toBe", true],
  //       ["myLinkedList.length", myLinkedList.length, "toBe", 2],
  //     ];

  //     executeTestCases(tests);
  //   });
};

export default [Push];
