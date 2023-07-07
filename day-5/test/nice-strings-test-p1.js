const { describe, it } = require('node:test');
const { strictEqual } = require('assert');
const { getNiceStringsCount, isNiceString, calculateVowelCount, hasConsecutiveSameLetters, hasBadSubString } = require('../src/nice-strings-p1');

describe('getNiceStringsCount', () => {
  it('should return 0 if there are no nice strings', () => {
    const data = 'adsff';
    const expected = 0;
    const actual = getNiceStringsCount(data.split('\n'));

    strictEqual(actual, expected);
  });

  it('should give the number of nice strings present in the given strings', () => {
    const data = 'ugknbfddgicrmopn\naaa\nb';
    const expected = 2;
    const actual = getNiceStringsCount(data.split('\n'));

    strictEqual(actual, expected);
  });
});

describe('isNiceString', () => {
  it('should return false if the string does not have at least 3 vowels', () => {
    const data = 'raja';
    const expected = false;
    const actual = isNiceString(data);

    strictEqual(actual, expected);
  });

  it('should return false if the string does not contain a repeating letter consecutively', () => {
    const data = 'something';
    const expected = false;
    const actual = isNiceString(data);

    strictEqual(actual, expected);
  });

  it('should return false if the string contains any one of the listed bad strings', () => {
    const data = 'abbacuse';
    const expected = false;
    const actual = isNiceString(data);

    strictEqual(actual, expected);
  });

  it('should return true for a string which satisfies all the conditions', () => {
    const data = 'ugknbfddgicrmopn';
    const expected = true;
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
  it('should return false if there are no consecutive same letters in the text', () => {
    const text = 'byeb';
    const expected = false;
    const actual = hasConsecutiveSameLetters(text);

    strictEqual(actual, expected);
  });

  it('should return true if there are consecutive same letters in the text', () => {
    const text = 'hello';
    const expected = true;
    const actual = hasConsecutiveSameLetters(text);

    strictEqual(actual, expected);
  });
});

describe('hasBadSubString', () => {
  const badStrings = ['ab', 'cd', 'pq', 'xy'];

  it('should return false as there are no bad strings present in the text', () => {
    const text = 'byea';
    const expected = false;
    const actual = hasBadSubString(text, badStrings);

    strictEqual(actual, expected);
  });

  it('should return true as there are bad strings present in the text', () => {
    const expected = true;

    let text = 'abacuss';
    let actual = hasBadSubString(text, badStrings);
    strictEqual(actual, expected);

    text = 'cdbac';
    actual = hasBadSubString(text, badStrings);
    strictEqual(actual, expected);

    text = 'fbgpqcture';
    actual = hasBadSubString(text, badStrings);
    strictEqual(actual, expected);

    text = 'haxyafd';
    actual = hasBadSubString(text, badStrings);
    strictEqual(actual, expected);

  });
});