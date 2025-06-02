import getNestedProperty from "../getNestedProperty"

const toBeTests = ({ my, correct, paths }) =>
  paths.map(path =>
    [`\n\t${my.name}.${path}`, getNestedProperty(my, path), 'toBe', getNestedProperty(correct, path)]
  )

export default toBeTests