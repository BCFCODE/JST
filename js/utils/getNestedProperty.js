const getNestedProperty = (obj, path) =>
  path.split('.').reduce((acc, part) => acc?.[part], obj)

export default getNestedProperty