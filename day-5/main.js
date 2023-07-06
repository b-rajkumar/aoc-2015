const fs = require('fs');
const { getNiceStringsCount } = require("./src/nice-strings-p1");

const readStrings = () => {
  const stringsFilePath = './resources/strings.txt';

  return fs.readFileSync(stringsFilePath, 'utf-8');
};

const splitByNewline = (text) => text.split('\n');

const main = () => {
  const strings = splitByNewline(readStrings());
  const niceStringsCount = getNiceStringsCount(strings);

  console.log('The number of nice strings are', niceStringsCount);
};

main();