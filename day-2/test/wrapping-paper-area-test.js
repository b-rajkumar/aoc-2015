const { describe, it } = require('node:test');
const { deepStrictEqual } = require('assert');
const { getAreaOfPaperForPrism, getSmallestSideArea, getTotalAreaOfPaper } = require('../src/wrapping-paper-area');

describe('getAreaOfPaperForPrism', () => {
  it('should return 58 for the dimensions of rectangular-prism 2, 3, 4', () => {
    const expected = 58;
    const actual = getAreaOfPaperForPrism([2, 3, 4]);

    deepStrictEqual(actual, expected);
  });

  it('should return 175 for the dimensions of a rectangular-prism with all dimensions equal to 5', () => {
    const expected = 175;
    const actual = getAreaOfPaperForPrism([5, 5, 5]);

    deepStrictEqual(actual, expected);
  });
});

describe('getSmallestSideArea', () => {
  it('should return the smallest area from the given side dimensions', () => {
    const sideDimensions = [2, 3, 4];
    const expected = 6;
    const actual = getSmallestSideArea(sideDimensions);

    deepStrictEqual(actual, expected);
  });
});

describe('getTotalAreaOfPaper', () => {
  it('should give the required area of paper for the given prisms', () => {
    const prisms = `2x3x4
    5x5x5`;
    const expected = 233;
    const actual = getTotalAreaOfPaper(prisms);

    deepStrictEqual(actual, expected);
  });

});