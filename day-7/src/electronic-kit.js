class ElectronicKit {
  #wires;
  constructor() {
    this.#wires = {};
  }

  #assign(instruction) {
    const signal = instruction.input[0];
    const wire = instruction.output;

    this.#wires[wire] = signal;
  }

  execute(instruction) {
    instruction.forEach(instruction => {
      if(instruction.name === 'assign') this.#assign(instruction);
      if(instruction.name === 'and') {
        const inputWire1 = instruction.input[0];
        const inputWire2 = instruction.input[1];

        const outputWire = instruction.output;

        this.#wires[outputWire] = this.#wires[inputWire1] & this.#wires[inputWire2];
      }
    });
  }

  getWires() {
    return this.#wires;
  }

};

module.exports = { ElectronicKit };