const calculateVowelCount = (text) => {
  const vowels = /[aeiou]/g;

  return (text.match(vowels) || []).length;
};

const hasConsecutiveSameLetters = (text) => {
  const consecutiveLetters = /(.)\1/;

  return consecutiveLetters.test(text);
};

const hasBadStrings = (text, badStrings) => {
  return badStrings.some(badString => text.includes(badString));
};

const isNiceString = (string) => {
  const conditions = {
    containsMoreThanThreeVowels: calculateVowelCount(string) > 2,
    containsConsecutiveSameLetters: hasConsecutiveSameLetters(string),
    containsbadStrings: !hasBadStrings(string, ['ab', 'cd', 'pq', 'xy'])
  };

  return Object.values(conditions).every(condition => condition);
};

const getNiceStringsCount = (strings) => {
  return strings.filter(isNiceString).length;
};

module.exports = { getNiceStringsCount, isNiceString, calculateVowelCount, hasConsecutiveSameLetters, hasBadStrings };