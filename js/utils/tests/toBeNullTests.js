import getNestedProperty from "../getNestedProperty"

const toBeNullTests = ({ my, paths, name }) =>
  paths.map(path =>
    [`\n\t${name}.${path}`, getNestedProperty(my, path), 'toBeNull', null]
  )

export default toBeNullTests