import { hasPropertyTests } from "./helper";

export const checkBSTInternalStructure = (Node) => {
  return [
    {
      name: "newNode",
      obj: new Node(),
      paths: [],
      properties: ["value", "left", "right"],
    },
  ].flatMap((test) => hasPropertyTests(test));
};

export const checkDLLInternalStructure = (myDoublyLinkedList) => {
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

export const checkGRInternalStructure = (myGraph) => [
  [
    `\n\tmyGraph.hasOwnProperty('adjacencyList')`,
    myGraph.hasOwnProperty("adjacencyList"),
    "toBe",
    true,
  ],
];

export const checkHTInternalStructure = (myHashTable) =>
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

export const checkLLInternalStructure = (myLinkedList) => {
  const nodeProperties = ["value", "next"];

  return [
    {
      name: "myLinkedList",
      obj: myLinkedList,
      paths: ["head", "tail"],
      properties: nodeProperties,
    },
    {
      name: "myLinkedList",
      obj: myLinkedList,
      properties: ["head", "tail", "length"],
    },
  ].flatMap((test) => hasPropertyTests(test));
};

export const checkQueueInternalStructure = (myQueue) => {
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

export const checkStackInternalStructure = (myStack) => {
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


