const { describe, it } = require('node:test');
const { deepStrictEqual } = require('assert');
const { getStarPosOfBasement } = require('../src/npl-p2');

describe('getStartPosOfBasement', () => {
  it('should return 1', () => {
    const input = ')';
    const actual = getStarPosOfBasement(input);
    const expected = 1;

    deepStrictEqual(actual, expected);
  });

  it('should return 5', () => {
    const input = '()())';
    const actual = getStarPosOfBasement(input);
    const expected = 5;

    deepStrictEqual(actual, expected);
  });
});