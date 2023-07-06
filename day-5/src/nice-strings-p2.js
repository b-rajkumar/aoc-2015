const hasSandWichedLetter = (text) => {
  const sandwichPattern = /(.).\1/;

  return sandwichPattern.test(text);
};

const hasRepeatedPairOfLetters = (text) => {
  const repeatedPairOfLettersPattern = /(.)(.).*\1\2/;

  return repeatedPairOfLettersPattern.test(text);
};

const isNiceString = (string) => {
  const conditions = {
    containsRepeatedPairOfLetters: hasRepeatedPairOfLetters(string),
    containsSandWichedLetter: hasSandWichedLetter(string)
  };

  return Object.values(conditions).every(condition => condition);
};

const getNiceStringsCountP2 = (strings) => {
  return strings.filter(isNiceString).length;
};

module.exports = { getNiceStringsCountP2, isNiceString, hasSandWichedLetter, hasRepeatedPairOfLetters };