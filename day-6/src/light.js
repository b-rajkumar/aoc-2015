class Light {
  #isLit;
  constructor() {
    this.#isLit = false;
  }

  lit() {
    this.#isLit = true;
  }

  unlit() {
    this.#isLit = false;
  }

  toggle() {
    this.#isLit = !this.#isLit;
  }

  isLit() {
    return this.#isLit;
  }
};

module.exports = { Light }