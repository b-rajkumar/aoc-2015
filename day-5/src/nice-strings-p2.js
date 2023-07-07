const isPatternPresent = (string, pattern) => {
  return pattern.test(string);
};

const isNiceString = (string) => {
  const repeatedPairOfLettersPattern = /(.)(.).*\1\2/;
  const sandwichedLetterPattern = /(.).\1/;

  const containsRepeatedPairOfLetters = isPatternPresent(string, repeatedPairOfLettersPattern);
  const containsSandWichedLetter = isPatternPresent(string, sandwichedLetterPattern);

  return containsRepeatedPairOfLetters && containsSandWichedLetter;
};

const getNiceStringsCount = (strings) => {
  return strings.filter(isNiceString).length;
};

module.exports = {
  getNiceStringsCount,
  isNiceString,
  isPatternPresent
};