import { it } from "vitest";
import { expect } from "vitest";

class Tests {
  #tests = [];

  constructor({ name, my, correct }) {
    this.name = name;
    this.my = my;
    this.correct = correct;
  }

  #getNestedProperty = (obj, path) =>
    path.split(".").reduce((acc, part) => acc?.[part], obj);

  #hasPropertyTests = ({ name, obj, paths = [], properties }) =>
    paths.length
      ? properties.flatMap((property) =>
          paths.map((path) => [
            `\n\t${name}.${path}.hasOwnProperty("${property}")`,
            this.#getNestedProperty(obj, path).hasOwnProperty(property),
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
    ].flatMap((test) => this.#hasPropertyTests(test));

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
    ].flatMap((test) => this.#hasPropertyTests(test));
  };

  checkDLLInternalStructure = () => {
    const nodeProperties = ["value", "prev", "next"];

    return [
      {
        name: "myDoublyLinkedList",
        obj: this.my,
        paths: ["head", "tail"],
        properties: nodeProperties,
      },
      {
        name: "myDoublyLinkedList",
        obj: this.my,
        properties: ["head", "tail", "length"],
      },
    ].flatMap((test) => this.#hasPropertyTests(test));
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
      ].flatMap((test) => this.#hasPropertyTests(test)),
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
    ].flatMap((test) => this.#hasPropertyTests(test));
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
    ].flatMap((test) => this.#hasPropertyTests(test));
  };

  set extra(tests) {
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

export default Tests;
