const { describe, it } = require('node:test');
const { strictEqual } = require('assert');
const { getNiceStringsCountP1, isNiceString, calculateVowelCount, hasConsecutiveSameLetters, hasBadStrings } = require('../src/nice-strings-p1');

describe('getNiceStringsCount', () => {
  it('should return 0 if there are no nice strings', () => {
    const data = '';
    const expected = 0;
    const actual = getNiceStringsCountP1(data.split('\n'));

    strictEqual(actual, expected);
  });

  it('should give the number of nice strings present in the given strings', () => {
    const data = 'ugknbfddgicrmopn\naaa\nb';
    const expected = 2;
    const actual = getNiceStringsCountP1(data.split('\n'));

    strictEqual(actual, expected);
  });
});

describe('isNiceString', () => {
  it('should return true for a nice string', () => {
    const data = 'ugknbfddgicrmopn';
    const expected = true;
    const actual = isNiceString(data);

    strictEqual(actual, expected);
  });

  it('should return false for a nice string', () => {
    const data = 'haegwjzuvuyypxyu';
    const expected = false;
    const actual = isNiceString(data);

    strictEqual(actual, expected);
  });
});

describe('calculateVowelCount', () => {
  it('should give 0 if there are no vowels in the text', () => {
    const text = 'fly';
    const expected = 0;
    const actual = calculateVowelCount(text);

    strictEqual(actual, expected);
  });

  it('should give the count of vowels in the text which contain vowels', () => {
    const text = 'hello';
    const expected = 2;
    const actual = calculateVowelCount(text);

    strictEqual(actual, expected);
  });

});

describe('hasConsecutiveSameLetters', () => {
  it('should return false if there are no consecutive letters in the text', () => {
    const text = 'bye';
    const expected = false;
    const actual = hasConsecutiveSameLetters(text);

    strictEqual(actual, expected);
  });


  it('should return true if there are consecutive letters in the text', () => {
    const text = 'hello';
    const expected = true;
    const actual = hasConsecutiveSameLetters(text);

    strictEqual(actual, expected);
  });
});

describe('hasBadStrings', () => {
  it('should return true as there are no bad strings present in the text', () => {
    const text = 'bye';
    const badStrings = ['ab', 'cd'];
    const expected = false;
    const actual = hasBadStrings(text, badStrings);

    strictEqual(actual, expected);
  });

  it('should return true as there are no bad strings present in the text', () => {
    const text = 'sometext';
    const badStrings = ['cd', 'te', 'xt'];
    const expected = true;
    const actual = hasBadStrings(text, badStrings);

    strictEqual(actual, expected);
  });
});