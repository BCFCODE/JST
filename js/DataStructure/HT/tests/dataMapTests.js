const toEqualDataMapTests = ({ myHashTable, correct }) =>
  myHashTable.dataMap.map((data, index) => [
    `\n\tmyHashTable.dataMap[${index}]`, data, 'toEqual', correct.dataMap[index]
  ])

export {
  toEqualDataMapTests
}