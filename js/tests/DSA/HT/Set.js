import { describe } from "vitest";
import { HashTable } from "../../../DSA/HT";
import { CorrectHashTable } from "../correct/HT";
import { Tests } from "../../../utils";
import Random from "../../../utils/Random";

const random = new Random();

export default function Set() {
  const dataMapSize = random.between(7, 15);
  const myHashTable = new HashTable(dataMapSize);
  const correct = new HashTable(dataMapSize);

  const keyValues = [
    ["bolts", 1400],
    ["washers", 50],
    ["bolts", 1400],
    ["washers", 50],
    ["lumber", 70],
  ];

  keyValues.forEach(([key, value]) => {
    describe(`After set key: ${JSON.stringify(key)} and value: ${value} (dataMap size: ${dataMapSize})\n\tconst myHashTable = new HashTable(${dataMapSize});\n\tconst returnValue = myHashTable.set(${JSON.stringify(key)}, ${value});`, () => {
      const returnValue = myHashTable.set(key, value);
      const correctReturnValue = correct.set(key, value);

      const tests = new Tests({
        name: "myHashTable",
        my: myHashTable,
        correct,
      });
      tests.extra = [
        ["\n\treturnValue", returnValue, "toEqual", correctReturnValue],
      ];
      tests.run();
    });
  });

  //   containValues.forEach((containValue) => {
  //     describe(`After testing contain value (myTree contains ${containValue})\n\tconst myTree = new BST();${containValues.map((value, i, arr) => `\n\tmyTree.insert(${value})`)}\n\tconst returnValue = myTree.contains(${containValue})`, () => {
  //       const returnValue = myTree.contains(containValue);
  //       const correctReturnValue = correct.contains(containValue);

  //       const tests = new Tests({
  //         name: "myTree",
  //         my: myTree,
  //         correct,
  //       });
  //       tests.extra = [
  //         ["\n\treturnValue", returnValue, "toBe", correctReturnValue],
  //       ];
  //       tests.run();
  //     });
  //   });

  //   describe(`After testing not contain value (myTree NOT contains ${randomNotContainValue})\n\tconst myTree = new BST();${containValues.map((value, i, arr) => `\n\tmyTree.insert(${value})`)}\n\tconst returnValue = myTree.contains(${randomNotContainValue})`, () => {
  //     const returnValue = myTree.contains(randomNotContainValue);
  //     const correctReturnValue = correct.contains(randomNotContainValue);

  //     const tests = new Tests({
  //       name: "myTree",
  //       my: myTree,
  //       correct,
  //     });
  //     tests.extra = [
  //       ["\n\treturnValue", returnValue, "toBe", correctReturnValue],
  //     ];
  //     tests.run();
  //   });
}

// import { describe } from "vitest"
// import { checkHTInternalStructure, executeTestCases } from "../../../../utils"
// import CorrectHashTable from "../Correct"
// import { toEqualDataMapTests } from "../dataMapTests"

// const keyValues = [
//   [
//     ['bolts', 1400],
//     ['washers', 50]
//   ],
//   [
//     ['bolts', 1400],
//     ['washers', 50],
//     ['lumber', 70]
//   ]
// ]

// export const validateSetOperations =
//   ({ myHashTable, returnValue, keyValue }) => {
//     let correct = new CorrectHashTable();

//     keyValue.forEach(([key, value]) => correct.set(key, value));

//     const correctReturnValue = correct.set('bolts', 1400)

//     return [
//       checkHTInternalStructure(myHashTable),
//       toEqualDataMapTests({ myHashTable, correct }),
//       [
//         ['\n\treturnValue', returnValue, 'toEqual', correctReturnValue]
//       ]
//     ].flat()
//   }

// const setTests = (HashTable) => {
//   describe(`set`, () => {

//     keyValues.forEach((keyValue) => {

//       describe(`\n\tlet myHashTable = new HashTable()\n\tmyHashTable.set('bolts', 1400)\n\tmyHashTable.set('washers', 50)\n\tconst returnValue = myHashTable.keys()`, () => {

//         let myHashTable = new HashTable();
//         keyValue.forEach(([key, value]) => myHashTable.set(key, value));

//         const returnValue = myHashTable.set('bolts', 1400)

//         const tests = validateSetOperations({ myHashTable, returnValue, keyValue })

//         executeTestCases(tests)
//       })

//     })

//   })
// }

// export default setTests
