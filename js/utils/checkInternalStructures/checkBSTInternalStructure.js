import hasPropertyTests from "../tests/hasPropertyTests"

const checkBSTInternalStructure = ({ newNode }) => {

  return [
    {
      name: 'newNode',
      obj: newNode,
      paths: [],
      properties: ['value', 'left', 'right']
    },
  ].flatMap(test => hasPropertyTests(test))

}

export default checkBSTInternalStructure