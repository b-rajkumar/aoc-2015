const fs = require("fs");
const { calculateOccupiedMemory, calculateBytesInEncodedString } = require("./src/memory");

const part1 = (strings) => {
  const bytesInStrings = strings.reduce((sum, string) => sum + string.length, 0);
  const bytesInMemory = strings.reduce((charCount, string) => {
    return charCount + calculateOccupiedMemory(string);
  }, 0);

  return bytesInStrings - bytesInMemory;
};

const part2 = (strings) => {
  const bytesInStrings = strings.reduce((sum, string) => sum + string.length, 0);
  const bytesInEnodedString = strings.reduce((charCount, string) => {
    return charCount + calculateBytesInEncodedString(string);
  }, 0);

  return bytesInEnodedString - bytesInStrings;
};

const main = () => {
  const strings = fs.readFileSync('./resources/strings.txt', 'utf-8').split('\n');

  console.log(part1(strings));
  console.log(part2(strings));
};

main();