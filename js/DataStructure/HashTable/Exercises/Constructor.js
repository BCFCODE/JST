class HashTable {
  // CREATE HashTable CONSTRUCTOR HERE//
  //                                  //
  //                                  //
  //                                  //
  //                                  //
  //////////////////////////////////////

  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length
    }
    return hash
  }
}

export default HashTable