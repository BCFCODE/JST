import getNestedProperty from "../getNestedProperty"

const toBeTests = ({ name, my, correct, paths }) =>
  paths.map(path =>
    [`\n\t${name}.${path}`, getNestedProperty(my, path), 'toBe', getNestedProperty(correct, path)]
  )

export default toBeTests
