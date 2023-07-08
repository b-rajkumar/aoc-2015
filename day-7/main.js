const fs = require('fs');
const { ElectronicCircuit, makeCircuit } = require('./src/electronic-kit');
const { extractInstruction } = require('./src/instructoin-extractor');

const readLines = () => {
  const instructionsFile = './resources/instructions.txt';
  return fs.readFileSync(instructionsFile, 'utf-8').split('\n');
};


const main = () => {
  const rawInstructions = readLines();
  const components = extractInstruction(rawInstructions);
  const electronicCircuit = new ElectronicCircuit();

  makeCircuit(components, electronicCircuit);
  console.log(electronicCircuit.getWires().a);
};

main();