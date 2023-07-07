class Light {
  #isLit;
  #brightness;
  constructor() {
    this.#isLit = false;
    this.#brightness = 0;
  }

  lit() {
    this.#isLit = true;
    this.#brightness += 1;
  }

  unlit() {
    this.#isLit = false;
    this.#brightness = (this.#brightness - 1 < 0) ? 0 : this.#brightness - 1;
  }

  toggle() {
    this.#isLit = !this.#isLit;
    this.#brightness += 2;
  }

  isLit() {
    return this.#isLit;
  }

  getBrightness() {
    return this.#brightness;
  }
};

module.exports = { Light }