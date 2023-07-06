const { describe, it } = require('node:test');
const { deepStrictEqual } = require('assert');
const { generateMd5MessageForLeadingZeros } = require('../src/md5');

describe('md5', () => {
  it('should give the posfix for the given string to get the md5 with leading 5 zeros', () => {
    const expected = 'abcdef609043';
    const actual = generateMd5MessageForLeadingZeros('abcdef', 5);

    deepStrictEqual(actual, expected);
  });
});