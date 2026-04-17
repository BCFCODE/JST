import { it } from "vitest";
import { expect } from "vitest";

export const getNestedProperty = (obj, path) =>
  path.split(".").reduce((acc, part) => acc?.[part], obj);

export const formatArgsForDisplay = (arr) =>
  arr.map((p) => JSON.stringify(p)).join`, `;

export const toBeNullTests = ({ my, paths, name }) =>
  paths.map((path) => [
    `\n\t${name}${path ? "." : ""}${path}`,
    getNestedProperty(my, path),
    "toBeNull",
    null,
  ]);

export const toEqualTests = ({ name, my, correct, paths }) =>
  paths.map((path) => [
    `\n\t${name}${path ? "." : ""}${path}`,
    getNestedProperty(my, path),
    "toEqual",
    getNestedProperty(correct, path),
  ]);

export const toBeTests = ({ name, my, correct, paths }) =>
  paths.map((path) => [
    `\n\t${name}${path ? "." : ""}${path}`,
    getNestedProperty(my, path),
    "toBe",
    getNestedProperty(correct, path),
  ]);

export const toBeUndefined = ({ name, my, correct, paths }) =>
  paths.map((path) => [
    `\n\t${name}${path ? "." : ""}${path}`,
    getNestedProperty(my, path),
    "toBeUndefined",
    getNestedProperty(correct, path),
  ]);

/**
 * Generates test cases to verify that specific properties exist
 * on an object or on its nested paths.
 *
 * @param {Object} params - Parameters for generating the test cases.
 * @param {string} params.name - A human-readable name used in test descriptions (e.g., 'myQueue').
 * @param {Object} params.obj - The actual object to be tested.
 * @param {string[]} [params.paths=[]] - Optional array of property paths (e.g., ['first', 'last']) within the object to check for nested properties.
 * @param {string[]} params.properties - List of property names expected to exist either on the object directly or on each nested path.
 *
 * @returns {Array<Array>} An array of test cases, where each test case is a 4-element array:
 *   [label: string, actualResult: boolean, matcher: 'toBe', expectedResult: true]
 *
 * @example
 * hasPropertyTests({
 *   name: 'myQueue',
 *   obj: myQueue,
 *   paths: ['first'],
 *   properties: ['value', 'next']
 * })
 *
 * // Returns:
 * [
 *   ['\n\tmyQueue.first.hasOwnProperty("value")', true, 'toBe', true],
 *   ['\n\tmyQueue.first.hasOwnProperty("next")', true, 'toBe', true]
 * ]
 */
export const hasPropertyTests = ({ name, obj, paths = [], properties }) =>
  paths.length
    ? properties.flatMap((property) =>
        paths.map((path) => [
          `\n\t${name}.${path}.hasOwnProperty("${property}")`,
          getNestedProperty(obj, path).hasOwnProperty(property),
          "toBe",
          true,
        ]),
      )
    : properties.map((property) => [
        `\n\t${name}.hasOwnProperty("${property}")`,
        obj.hasOwnProperty(property),
        "toBe",
        true,
      ]);

export function setTarget(name, my) {
  return { name, my };
}

export class Tests {
  #tests = [];

  constructor({ name, my, correct }) {
    this.name = name;
    this.my = my;
    this.correct = correct;
  }

  #getNestedProperty = (obj, path) =>
    path.split(".").reduce((acc, part) => acc?.[part], obj);

  toBeNull = (paths = []) =>
    paths.forEach((path) =>
      this.#tests.push([
        `\n\t${this.name}${path ? "." : ""}${path}`,
        this.#getNestedProperty(this.my, path),
        "toBeNull",
        null,
      ]),
    );

  toEqual = (paths = []) =>
    paths.forEach((path) =>
      this.#tests.push([
        `\n\t${this.name}${path ? "." : ""}${path}`,
        this.#getNestedProperty(this.my, path),
        "toEqual",
        this.#getNestedProperty(this.correct, path),
      ]),
    );

  toBe = (paths = []) =>
    paths.forEach((path) =>
      this.#tests.push([
        `\n\t${this.name}${path ? "." : ""}${path}`,
        this.#getNestedProperty(this.my, path),
        "toBe",
        this.#getNestedProperty(this.correct, path),
      ]),
    );

  toBeUndefined(paths = []) {
    this.toBeUndefinedPaths = paths;
  }

  checkLLInternalStructure = () => {
    const nodeProperties = ["value", "next"];

    const tests = [
      {
        name: "myLinkedList",
        obj: this.my,
        paths: ["head", "tail"],
        properties: nodeProperties,
      },
      {
        name: "myLinkedList",
        obj: this.my,
        properties: ["head", "tail", "length"],
      },
    ].flatMap((test) => hasPropertyTests(test));

    tests.forEach((test) => this.#tests.push(test));
  };

  checkBSTInternalStructure = (Node) => {
    return [
      {
        name: "newNode",
        obj: new Node(),
        paths: [],
        properties: ["value", "left", "right"],
      },
    ].flatMap((test) => hasPropertyTests(test));
  };

  checkDLLInternalStructure = (myDoublyLinkedList) => {
    const nodeProperties = ["value", "prev", "next"];

    return [
      {
        name: "myDoublyLinkedList",
        obj: myDoublyLinkedList,
        paths: ["head", "tail"],
        properties: nodeProperties,
      },
      {
        name: "myDoublyLinkedList",
        obj: myDoublyLinkedList,
        properties: ["head", "tail", "length"],
      },
    ].flatMap((test) => hasPropertyTests(test));
  };

  checkGRInternalStructure = (myGraph) => [
    [
      `\n\tmyGraph.hasOwnProperty('adjacencyList')`,
      myGraph.hasOwnProperty("adjacencyList"),
      "toBe",
      true,
    ],
  ];

  checkHTInternalStructure = (myHashTable) =>
    [
      [
        [
          "\n\tArray.isArray(myHashTable.dataMap)",
          Array.isArray(myHashTable.dataMap),
          "toBe",
          true,
        ],
        [
          "\n\tmyHashTable.dataMap.length > 0",
          myHashTable.dataMap.length > 0,
          "toBe",
          true,
        ],
      ],
      [
        {
          name: "myHashTable",
          obj: myHashTable,
          paths: ["dataMap"],
          properties: ["length"],
        },
        {
          name: "myHashTable",
          obj: myHashTable,
          properties: ["dataMap"],
        },
      ].flatMap((test) => hasPropertyTests(test)),
    ].flat();

  checkQueueInternalStructure = (myQueue) => {
    const nodeProperties = ["value", "next"];

    return [
      {
        name: "myQueue",
        obj: myQueue,
        paths: ["first", "last"],
        properties: nodeProperties,
      },
      {
        name: "myQueue",
        obj: myQueue,
        properties: ["first", "last", "length"],
      },
    ].flatMap((test) => hasPropertyTests(test));
  };

  checkStackInternalStructure = (myStack) => {
    const nodeProperties = ["value", "next"];

    return [
      {
        name: "myStack",
        obj: myStack,
        paths: ["top"],
        properties: nodeProperties,
      },
      {
        name: "myStack",
        obj: myStack,
        properties: ["top", "length"],
      },
    ].flatMap((test) => hasPropertyTests(test));
  };

  set manual(tests) {
    tests.forEach((test) => this.#tests.push(test));
  }

  run = () => {
    this.#tests.forEach(([message, result, assertionMethod, expected]) => {
      it(`${message} >> ${JSON.stringify(expected)}`, () => {
        expect(result)[assertionMethod](expected);
      });
    });
  };
}
