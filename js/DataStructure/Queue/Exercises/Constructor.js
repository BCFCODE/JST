class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

export class Queue {
  constructor(value) {
    const newNode = new Node(value)
    this.first = newNode
    this.last = newNode
    this.length = 1
  }
}


