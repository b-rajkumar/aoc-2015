const { describe, it } = require('node:test');
const { deepStrictEqual } = require('assert');
const { getFloorNumber } = require('../src/nql-p1');

describe('getFloorNumber', () => {
  it('should take santa to ground floor', () => {
    const input = '(())';
    const expected = 0;
    const actual = getFloorNumber(input);

    deepStrictEqual(actual, expected);
  });

  it('should take santa to second floor', () => {
    const input = '(())((';
    const expected = 2;
    const actual = getFloorNumber(input);

    deepStrictEqual(actual, expected);
  });

  it('should take santa to third level basement', () => {
    const input = ')())())';
    const expected = -3;
    const actual = getFloorNumber(input);

    deepStrictEqual(actual, expected);
  });
});