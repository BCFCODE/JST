import getNestedProperty from "../getNestedProperty"

const toEqualTests = ({ name, my, correct, paths }) =>
  paths.map(path =>
    [`\n\t${name}${path ? '.' : ''}${path}`, getNestedProperty(my, path), 'toEqual', getNestedProperty(correct, path)]
  )

export default toEqualTests
