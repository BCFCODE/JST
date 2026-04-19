class Random {
  #rangeLimit = 50;

  #validation = (n1, n2) => {
    if (n1 >= n2) throw new Error(`n1: ${n1}, must be less than ${n2}`);
    if (n2 <= n1) throw new Error(`n2: ${n2}, must be greater than ${n1}`);
  };

  #randomArrayIndex = (arrayLength) => {
    return Math.floor(Math.random() * arrayLength);
  };

  lessThan = (n) => {
    return n - Math.ceil(Math.random() * this.#rangeLimit);
  };

  greaterThan = (n) => {
    return n + Math.ceil(Math.random() * this.#rangeLimit);
  };

  between = (n1, n2) => {
    this.#validation(n1, n2);

    return Math.floor(Math.random() * (n2 - n1 + 1));
  };

  notBetween = (n1, n2) => {
    this.#validation(n1, n2);

    const arr = [this.lessThan(n1), this.greaterThan(n2)];
    const randomArrayIndex = this.#randomArrayIndex(arr.length);

    const chosenRandomlyBetweenLessOrGreaterThan = arr[randomArrayIndex];
    return chosenRandomlyBetweenLessOrGreaterThan;
  };

  set rangeLimit(rangeLimit) {
    if (rangeLimit <= 0)
      throw new Error(`rangeLimit: ${rangeLimit}, must be greater than 0`);
    this.#rangeLimit = rangeLimit;
  }

  get rangeLimit() {
    return this.#rangeLimit;
  }

}

export default Random;
