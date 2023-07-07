const fs = require('fs');
const { getNiceStringsCount: getNiceStringsCountForP1 } = require("./src/nice-strings-p1");
const { getNiceStringsCount: getNiceStringsCountForP2 } = require('./src/nice-strings-p2');

const readLines = () => {
  const stringsFilePath = './resources/strings.txt';

  return fs.readFileSync(stringsFilePath, 'utf-8').split('\n');
};

const main = () => {
  const lines = readLines();
  const niceStringsCountInP1 = getNiceStringsCountForP1(lines);
  const niceStringsCountInP2 = getNiceStringsCountForP2(lines);

  console.log('The number of nice strings in part 1 are', niceStringsCountInP1);
  console.log('The number of nice strings in part 2 are', niceStringsCountInP2);
};

main();