const { describe, it } = require('node:test');
const { strictEqual } = require('assert');
const { isNiceString, isPatternPresent, getNiceStringsCount } = require('../src/nice-strings-p2');

describe('getNiceStringsCount', () => {
  it('should give 0 if there are no nice strings', () => {
    const data = 'uurcxstgmygtbstg';
    const expected = 0;
    const actual = getNiceStringsCount(data.split('\n'));

    strictEqual(actual, expected);
  });

  it('should give the count of nice strings present', () => {
    const data = 'qjhvhtzxzqqjkmpb\nxxyxx\naga';
    const expected = 2;
    const actual = getNiceStringsCount(data.split('\n'));

    strictEqual(actual, expected);
  });
});

describe('isNiceString', () => {
  it('should return false if the string does not contain a letter sandwiched between another letter', () => {
    const data = 'abxab';
    const expected = false;
    const actual = isNiceString(data);

    strictEqual(actual, expected);
  });

  it('should return false if the string does not contain a pair that appear twice', () => {
    const data = 'aba';
    const expected = false;
    const actual = isNiceString(data);

    strictEqual(actual, expected);
  });

  it('should return true for a string which satisfies all the conditions', () => {
    const expected = true;
    const data = 'xxyxx';
    const actual = isNiceString(data);

    strictEqual(actual, expected);
  });
});

describe('isPatternPresent', () => {
  it('should return false if the text does not contain the given pattern', () => {
    const repeatedPairOfLettersPattern = /(.)(.).*\1\2/;
    const text = 'tdd';
    const expected = false;
    const actual = isPatternPresent(text, repeatedPairOfLettersPattern);

    strictEqual(actual, expected);
  });

  it('should return true if the text contain the given pattern', () => {
    const repeatedPairOfLettersPattern = /(.)(.).*\1\2/;
    const text = 'qjhvhtzxzqqjkmpb';
    const expected = true;
    const actual = isPatternPresent(text, repeatedPairOfLettersPattern);

    strictEqual(actual, expected);
  });
});