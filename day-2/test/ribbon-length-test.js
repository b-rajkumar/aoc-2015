const { describe, it } = require('node:test');
const { deepStrictEqual } = require('assert');
const { getSmallestSidePerimeter, getRibbonLengthOfPrism, getTotalRibbonLength } = require('../src/wrapping-paper-area');

describe('getSmallestSidePerimeter', () => {
  it('should return perimeter of the smallest side of rectangular-prism', () => {
    const expected = 10;
    const actual = getSmallestSidePerimeter([2, 3, 4]);

    deepStrictEqual(actual, expected);
  });

});

describe('getRibbonLength', () => {
  it('should return 34 for a rectangular-prism of dimensions 2x3x4', () => {
    const expected = 34;
    const actual = getRibbonLengthOfPrism([2, 3, 4]);

    deepStrictEqual(actual, expected);
  });

});

describe('getTotalRibbonLength', () => {
  it('should return the total length of ribbon required for all the given prisms', () => {
    const data = `2x3x4
    5x5x5`;
    const expected = 179;
    const actual = getTotalRibbonLength(data);

    deepStrictEqual(actual, expected);
  });

});