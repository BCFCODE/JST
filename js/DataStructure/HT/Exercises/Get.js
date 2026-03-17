class HashTable {
  // ...

  // ...

  set(key, value) {
    let index = this._hash(key)
    if (!this.dataMap[index]) {
      this.dataMap[index] = []
    }
    this.dataMap[index].push([key, value])
    return this
  }

  // ...
}

export default HashTable