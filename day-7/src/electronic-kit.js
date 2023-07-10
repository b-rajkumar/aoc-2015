class ElectronicCircuit {
  #wires;
  constructor() {
    this.#wires = {};
  }

  #isNumber(value) {
    return typeof value === 'number';
  }

  #identity([number]) {
    return number;
  }

  #and([number1, number2]) {
    return number1 & number2;
  }

  #or([number1, number2]) {
    return number1 | number2;
  }

  #not([number]) {
    return 65535 - number;
  }

  #lshift([number, shiftCount]) {
    return number << shiftCount;
  }

  #rshift([number, shiftCount]) {
    return number >> shiftCount;
  }

  #extractIO(instruction) {
    const inputs = instruction.input.map(signal =>
      this.#isNumber(signal) ? signal : this.#wires[signal]);
    const wire = instruction.output;

    return { inputs, wire };
  }

  execute(instruction) {
    const gates = {
      'ASSIGN': (inputs) => this.#identity(inputs),
      'AND': (inputs) => this.#and(inputs),
      'OR': (inputs) => this.#or(inputs),
      'NOT': (inputs) => this.#not(inputs),
      'LSHIFT': (inputs) => this.#lshift(inputs),
      'RSHIFT': (inputs) => this.#rshift(inputs),
    };

    const operation = gates[instruction.operation];
    const { inputs, wire } = this.#extractIO(instruction);

    if(inputs.includes(undefined)) return false;
    this.#wires[wire] = operation(inputs);

    return true;
  }

  reset() {
    this.#wires = {};
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