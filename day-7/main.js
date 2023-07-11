const fs = require('fs');
const { ElectronicCircuit, makeCircuit } = require('./src/electronic-kit');
const { extractInstruction } = require('./src/instructoin-extractor');

const readLines = () => {
  const instructionsFile = './resources/instructions.txt';
  return fs.readFileSync(instructionsFile, 'utf-8').split('\n');
};

const modifyInputSignal = (wire, input, components) => {
  components.forEach(component => {
    if(component.output === wire) component.input = input;
  });
};

const main = () => {
  const rawInstructions = readLines();
  const components = extractInstruction(rawInstructions);
  const electronicCircuit = new ElectronicCircuit();
  const secondElectronicCircuit = new ElectronicCircuit();

  makeCircuit(components, electronicCircuit);
  let wires = electronicCircuit.getWires();
  console.log('The signal provided to wire "a" is', wires.a);

  modifyInputSignal('b', [wires.a], components);

  makeCircuit(components, secondElectronicCircuit);
  wires = secondElectronicCircuit.getWires();
  console.log('The signal of "a" wire after assigning the signal of "a" to "b" from previous operxations is', wires.a);
};

main();