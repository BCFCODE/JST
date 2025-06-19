import hasPropertyTests from "../tests/hasPropertyTests"

const checkBSTInternalStructure = ({ Node }) => {

  return [
    {
      name: 'newNode',
      obj: new Node(),
      paths: [],
      properties: ['value', 'left', 'right']
    },
  ].flatMap(test => hasPropertyTests(test))

}

export default checkBSTInternalStructure