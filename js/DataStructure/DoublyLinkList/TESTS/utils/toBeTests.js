import getNestedProperty from "../../../../utils/getNestedProperty"

const toBeTests = ({ my, correct, paths }) =>
  paths.map(path =>
    [`\n\t${my.name}.${path}`, getNestedProperty(my, path), 'toBe', getNestedProperty(correct.myDoublyLinkedList, path)]
  )

export default toBeTests