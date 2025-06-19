import getNestedProperty from "../getNestedProperty"

const toBeUndefined = ({ name, my, correct, paths }) =>
  paths.map(path =>
    [`\n\t${name}${path ? '.' : ''}${path}`, getNestedProperty(my, path), 'toBeUndefined', getNestedProperty(correct, path)]
  )

export default toBeUndefined
