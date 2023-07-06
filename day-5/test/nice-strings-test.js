const { describe, it } = require('node:test');
const { strictEqual } = require('assert');
const { getNiceStringsCount } = require('../src/nice-strings');

describe('getNiceStringsCount', () => {
  it('should return 0 for an empty string', () => {
    const data = '';
    const expected = 0;
    const actual = getNiceStringsCount(data.split('\n'));

    strictEqual(actual, expected);
  });
});