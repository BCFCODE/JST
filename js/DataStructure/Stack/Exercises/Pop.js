// ...

class Stack {
  // ...

  push(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.top = newNode
    } else {
      newNode.next = this.top
      this.top = newNode
    }
    this.length++
    return this
  }

  // ...

}

export default Stack