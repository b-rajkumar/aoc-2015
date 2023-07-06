const fs = require('fs');
const { getNiceStringsCountP1 } = require("./src/nice-strings-p1");
const { getNiceStringsCountP2 } = require('./src/nice-strings-p2');

const readStrings = () => {
  const stringsFilePath = './resources/strings.txt';

  return fs.readFileSync(stringsFilePath, 'utf-8');
};

const splitByNewline = (text) => text.split('\n');

const main = () => {
  const strings = splitByNewline(readStrings());
  const niceStringsCountInP1 = getNiceStringsCountP1(strings);
  const niceStringsCountInP2 = getNiceStringsCountP2(strings);

  console.log('The number of nice strings in part 1 are', niceStringsCountInP1);
  console.log('The number of nice strings in part 2 are', niceStringsCountInP2);

};

main();