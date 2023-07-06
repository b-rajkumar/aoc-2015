const { describe, it } = require('node:test');
const { strictEqual } = require('assert');
const { isNiceString, hasSandWichedLetter, hasRepeatedPairOfLetters, getNiceStringsCountP2 } = require('../src/nice-strings-p2');

describe('getNiceStringsCount', () => {
  it('should give 0 if there are no nice strings', () => {
    const data = 'uurcxstgmygtbstg';
    const expected = 0;
    const actual = getNiceStringsCountP2(data.split('\n'));

    strictEqual(actual, expected);
  });

  it('should give the count of nice strings present', () => {
    const data = 'qjhvhtzxzqqjkmpb\nxxyxx\naga';
    const expected = 2;
    const actual = getNiceStringsCountP2(data.split('\n'));

    strictEqual(actual, expected);
  });
});

describe('isNiceString', () => {
  it('should return false if the string does not contain a letter sandwiched between another letter', () => {
    const data = 'something';
    const expected = false;
    const actual = isNiceString(data);

    strictEqual(actual, expected);
  });

  it('should return false if the string does not contain a pair that appear twice', () => {
    const data = 'something';
    const expected = false;
    const actual = isNiceString(data);

    strictEqual(actual, expected);
  });

  it('should return true for a string which satisfies all the conditions', () => {
    const data = 'qjhvhtzxzqqjkmpb';
    const expected = true;
    const actual = isNiceString(data);

    strictEqual(actual, expected);
  });
});

describe('hasSandwichedLetter', () => {
  it('should return false if the text does not contain sandwiched letter', () => {
    const text = 'hello';
    const expected = false;
    const actual = hasSandWichedLetter(text);

    strictEqual(actual, expected);
  });

  it('should return true if the text contain sandwiched letter', () => {
    const text = 'xax';
    const expected = true;
    const actual = hasSandWichedLetter(text);

    strictEqual(actual, expected);
  });
});

describe('hasRepeatedPairOfLetters', () => {
  it('should return false if the text does not contain repeated pair of letters', () => {
    const text = 'tdd';
    const expected = false;
    const actual = hasRepeatedPairOfLetters(text);

    strictEqual(actual, expected);
  });

  it('should return true if the text contain repeated pair of letters', () => {
    const text = 'qjhvhtzxzqqjkmpb';
    const expected = true;
    const actual = hasRepeatedPairOfLetters(text);

    strictEqual(actual, expected);
  });
});