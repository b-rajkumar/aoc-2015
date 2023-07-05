const { describe, it } = require('node:test');
const { deepStrictEqual } = require('assert');
const { getVisitedHousesCount } = require('../src/gifts-by-santa');

describe('getVisitedHousesCount', () => {
  it('should give the number of houses visited by santa', () => {
    const moves = '^<';
    const expected = 3;
    const actual = getVisitedHousesCount(moves);

    deepStrictEqual(actual, expected);
  });

  it('should give the number of houses visited by santa even if he visits multiple times', () => {
    const moves = '^v';
    const expected = 2;
    const actual = getVisitedHousesCount(moves);

    deepStrictEqual(actual, expected);
  });

});