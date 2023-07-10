const fs = require('fs');
const { ElectronicCircuit, makeCircuit } = require('./src/electronic-kit');
const { extractInstruction } = require('./src/instructoin-extractor');

const readLines = () => {
  const instructionsFile = './resources/instructions.txt';
  return fs.readFileSync(instructionsFile, 'utf-8').split('\n');
};

const modifyInputSignal = (wire, input, components) => {
  components.forEach(component => {
    if(component.output === wire) {
      component.input = input;
    }
  });
};

const main = () => {
  const rawInstructions = readLines();
  let components = extractInstruction(rawInstructions);
  const electronicCircuit = new ElectronicCircuit();

  makeCircuit(components, electronicCircuit);
  let wires = electronicCircuit.getWires();
  let aWireSignal = wires.a;
  console.log('The signal provided to wire "a" is', aWireSignal);
  electronicCircuit.reset();

  modifyInputSignal('b', [aWireSignal], components);
  makeCircuit(components, electronicCircuit);
  wires = electronicCircuit.getWires();
  aWireSignal = wires.a;
  console.log('The signal of "a" wire after assigning the signal of "a" to "b" from previous operations is', aWireSignal);

};

main();