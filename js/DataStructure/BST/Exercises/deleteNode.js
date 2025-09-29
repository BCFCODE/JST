export class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode
      return this
    }
    let temp = this.root
    while (true) {
      if (newNode === temp) return undefined
      if (newNode.value === temp.value) return undefined
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode
          return this
        }
        temp = temp.left
      } else {
        if (temp.right === null) {
          temp.right = newNode
          return this
        }
        temp = temp.right
      }
    }
  }

  contains(value) {
    if (this.root === null) return false
    let temp = this.root
    while (temp) {
      if (value < temp.value) {
        temp = temp.left
      } else if (value > temp.value) {
        temp = temp.right
      } else {
        return true
      }
    }
    return false
  }

  rContains(value, currentNode = this.root) {
    if (currentNode === null) return false

    if (value === currentNode.value) return true

    if (value < currentNode.value) {
      return this.rContains(value, currentNode.left)
    } else {
      return this.rContains(value, currentNode.right)
    }
  }


  #rInsert(value, currentNode = this.root) {
    if (currentNode === null) return new Node(value)

    if (value < currentNode.value) {
      currentNode.left = this.#rInsert(value, currentNode.left)
    } else if (value > currentNode.value) {
      currentNode.right = this.#rInsert(value, currentNode.right)
    }

    return currentNode
  }

  rInsert(value) {
    if (this.root === null) this.root = new Node(value)
    this.#rInsert(value)
  }

  minValue(currentNode) {
    while (currentNode.left != null) {
      currentNode = currentNode.left
    }
    return currentNode.value
  }

  #deleteNode(value, currentNode) {
    if (currentNode === null) return null

    if (value < currentNode.value) {
      currentNode.left = this.#deleteNode(value, currentNode.left)
    } else if (value > currentNode.value) {
      currentNode.right = this.#deleteNode(value, currentNode.right)
    }

    return currentNode
  }

  deleteNode(value) {
    this.root = this.#deleteNode(value, this.root)
  }
}

export default BST