const fs = require('fs');
const { extractInstruction } = require('./src/extract-instruction');
const { Light } = require('./src/light');
const { LightBoard } = require('./src/light-board');

const readInstructions = () => {
  const instructionFilePath = './resources/board-instructions.txt';
  return fs.readFileSync(instructionFilePath, 'utf-8').split('\n');
};

const getInstructions = (rawInstructions) => {
  return rawInstructions.map(extractInstruction);
};

const createLights = (rows, columns) => {
  return new Array(rows).fill().map(_ => new Array(columns).fill().map(_ => new Light()));
};

const main = () => {
  const rawInstructions = readInstructions();
  const instructions = getInstructions(rawInstructions);
  const lights = createLights(1000, 1000);
  const lightBoard = new LightBoard(lights);
  lightBoard.execute(instructions);

  console.log('The number of lit lights are', lightBoard.litLightsCount());
  console.log('The total brightness of lights is', lightBoard.totalBrightnessOfLights());
};

main();