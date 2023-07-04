const splitByNewLine = (text) => text.split('\n');
const splitByX = (text) => text.split('x');
const sum = (numbers) => numbers.reduce((a, b) => a + b, 0);
const ascendingSort = (numbers) => numbers.sort((a, b) => a - b);

const getSmallestSideOfPrism = (dimensions) => {
  const [l, b] = ascendingSort(dimensions);

  return l * b;
};

const getAreaOfPaperForPrism = (l, w, h) => {
  let areaOfPaper = 2 * l * w + 2 * w * h + 2 * h * l;
  areaOfPaper += getSmallestSideOfPrism([l, w, h]);

  return areaOfPaper;
};

const getPrisms = (data) => {
  return splitByNewLine(data).map(splitByX);
};

const getTotalAreaOfPaper = (data) => {
  const prisms = getPrisms(data);

  const areaOfPaper = sum(prisms.map(([l, w, h]) => getAreaOfPaperForPrism(l, w, h)));

  return areaOfPaper;
};

exports.getAreaOfPaperForPrism = getAreaOfPaperForPrism;
exports.getSmallestSideOfPrism = getSmallestSideOfPrism;
exports.getTotalAreaOfPaper = getTotalAreaOfPaper;