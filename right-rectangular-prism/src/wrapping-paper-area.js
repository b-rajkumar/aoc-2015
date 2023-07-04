const splitByNewLine = (text) => text.split('\n');
const splitByX = (text) => text.split('x');
const sum = (numbers) => numbers.reduce((a, b) => a + b, 0);
const ascendingSort = (numbers) => numbers.sort((a, b) => a - b);

const getSmallestSideArea = (dimensions) => {
  const [l, b] = ascendingSort(dimensions);

  return l * b;
};

const getAreaOfPaperForPrism = ([l, w, h]) => {
  let areaOfPaper = 2 * l * w + 2 * w * h + 2 * h * l;
  areaOfPaper += getSmallestSideArea([l, w, h]);

  return areaOfPaper;
};

const getPrisms = (data) => {
  return splitByNewLine(data).map(splitByX);
};

const getTotalAreaOfPaper = (data) => {
  const prisms = getPrisms(data);

  return sum(prisms.map((dimensions) => getAreaOfPaperForPrism(dimensions)));
};

const getSmallestSidePerimeter = (dimensions) => {
  const [l, b] = ascendingSort(dimensions);

  return 2 * l + 2 * b;
};

const getRibbonLengthOfPrism = ([l, w, h]) => {
  let ribbonLength = l * w * h;
  const smallestSidePerimeter = getSmallestSidePerimeter([l, w, h]);

  return ribbonLength + smallestSidePerimeter;
};

const getTotalRibbonLength = (data) => {
  const prisms = getPrisms(data);

  return sum(prisms.map((dimensions) => getRibbonLengthOfPrism(dimensions)));
};

exports.getAreaOfPaperForPrism = getAreaOfPaperForPrism;
exports.getSmallestSideArea = getSmallestSideArea;
exports.getTotalAreaOfPaper = getTotalAreaOfPaper;
exports.getRibbonLengthOfPrism = getRibbonLengthOfPrism;
exports.getSmallestSidePerimeter = getSmallestSidePerimeter;
exports.getTotalRibbonLength = getTotalRibbonLength;