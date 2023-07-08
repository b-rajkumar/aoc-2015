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
      'ASSIGN': (instruction) => this.#assign(instruction),
      'AND': (instruction) => this.#and(instruction),
      'OR': (instruction) => this.#or(instruction),
      'NOT': (instruction) => this.#not(instruction),
      'LSHIFT': (instruction) => this.#lshift(instruction),
      'RSHIFT': (instruction) => this.#rshift(instruction),
    };

    const operation = gates[instruction.operation];
    const { input, wire } = this.#extractIO(instruction);

    if(input.includes(undefined)) return false;
    operation({ input, wire });

    return true;
  }

  getWires() {
    return { ...this.#wires };
  }
};


const makeCircuit = (components, circuit) => {
  if(components.length === 0) return true;

  const remainingComponents = components.filter(component => !circuit.execute(component));

  if(remainingComponents.length === components.length) return false;
  else return makeCircuit(remainingComponents, circuit);
};

module.exports = { ElectronicCircuit, makeCircuit };