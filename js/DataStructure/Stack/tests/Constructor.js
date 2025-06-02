import Stack from ".."
import checkStackInternalStructure from "../../../utils/checkStackInternalStructure"
import toBeTests from "../../../utils/tests/toBeTests"
import toBeNullTests from "../../../utils/tests/toBeNullTests"



const buildExpectedStackConstructor = () => {
  let myStack = new Stack(4)
  return { myStack }
}

export const constructorTests = (myStack) => {
  const correct = buildExpectedStackConstructor().myStack

  myStack.name = 'Stack'

  const toBePaths = [
    'top.value',
  ]

  const toBeNullPaths = [
    'top.next',
  ];

  return [
    ...checkStackInternalStructure(myStack),
    ...toBeTests({ my: myStack, correct, paths: toBePaths }),
    ...toBeNullTests({ my: myStack, paths: toBeNullPaths }),
    ['\n\tmyStack.length', myStack.length, 'toBe', 1],
  ]
}



