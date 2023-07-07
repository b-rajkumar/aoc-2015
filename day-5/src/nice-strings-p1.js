const calculateVowelCount = (text) => {
  const vowels = /[aeiou]/g;

  return (text.match(vowels) || []).length;
};

const hasConsecutiveSameLetters = (text) => {
  const consecutiveSameLetters = /(.)\1/;

  return consecutiveSameLetters.test(text);
};

const hasBadSubString = (text, badStrings) => {
  return badStrings.some(badString => text.includes(badString));
};

const badStrings = ['ab', 'cd', 'pq', 'xy'];

const isNiceString = (string) => {
  const containsMoreThanTwoVowels = calculateVowelCount(string) > 2;
  const containsConsecutiveSameLetters = hasConsecutiveSameLetters(string);
  const containsBadSubString = hasBadSubString(string, badStrings);

  return containsMoreThanTwoVowels && containsConsecutiveSameLetters && !containsBadSubString;
};

const getNiceStringsCount = (strings) => {
  return strings.filter(isNiceString).length;
};

module.exports = {
  getNiceStringsCount,
  isNiceString,
  calculateVowelCount,
  hasConsecutiveSameLetters,
  hasBadSubString
};