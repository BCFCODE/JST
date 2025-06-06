import getNestedProperty from "../getNestedProperty"

const toEqualTests = ({ my, correct, paths }) =>
  paths.map(path =>
    [`\n\t${my.name}.${path}`, getNestedProperty(my, path), 'toEqual', getNestedProperty(correct, path)]
  )

export default toEqualTests
