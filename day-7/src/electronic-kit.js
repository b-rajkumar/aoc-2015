class ElectronicCircuit {
  #wires;
  constructor() {
    this.#wires = {};
  }

  #isNumber(value) {
    return typeof value === 'number';
  }

  #assign({ input, wire }) {
    this.#wires[wire] = input[0];
  }

  #and({ input, wire }) {
    const [signal1, signal2] = input;
    this.#wires[wire] = signal1 & signal2;
  }

  #or({ input, wire }) {
    const [signal1, signal2] = input;
    this.#wires[wire] = signal1 | signal2;
  }

  #not({ input, wire }) {
    const inputNumber = input[0];
    this.#wires[wire] = 65535 - inputNumber;
  }

  #lshift({ input, wire }) {
    const [inputNumber, shiftCount] = input;
    this.#wires[wire] = inputNumber << shiftCount;
  }

  #rshift({ input, wire }) {
    const [inputNumber, shiftCount] = input;
    this.#wires[wire] = inputNumber >> shiftCount;
  }

  #extractIO(instruction) {
    const input = instruction.input.map(input => this.#isNumber(input) ? input : this.#wires[input]);
    const wire = instruction.output;

    return { input, wire };
  }

  execute(instruction) {
    const gates = {
      'assign': (instruction) => this.#assign(instruction),
      'and': (instruction) => this.#and(instruction),
      'or': (instruction) => this.#or(instruction),
      'not': (instruction) => this.#not(instruction),
      'lshift': (instruction) => this.#lshift(instruction),
      'rshift': (instruction) => this.#rshift(instruction),
    };

    const operation = gates[instruction.operation];
    const IO = this.#extractIO(instruction);
    operation(IO);
  }

  getWires() {
    return this.#wires;
  }
};

module.exports = { ElectronicCircuit };