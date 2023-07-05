const getVisitedHousesCount = (movesData) => {
  const santaLocation = [0, 0];
  const visitedHouses = { '00': '00' };

  const moveInstructions = {
    'v': () => santaLocation[1] -= 1,
    '^': () => santaLocation[1] += 1,
    '<': () => santaLocation[0] -= 1,
    '>': () => santaLocation[0] += 1,
  };

  for(const move of movesData) {
    moveInstructions[move]();
    const location = santaLocation.join('');
    visitedHouses[location] = location;
  };

  return Object.keys(visitedHouses).length;
};

exports.getVisitedHousesCount = getVisitedHousesCount;  