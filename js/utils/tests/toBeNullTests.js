import getNestedProperty from "../getNestedProperty"

const toBeNullTests = ({ my, paths }) =>
  paths.map(path =>
    [`\n\t${my.name}.${path}`, getNestedProperty(my, path), 'toBeNull', null]
  )

export default toBeNullTests