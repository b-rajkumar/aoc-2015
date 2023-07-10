const getVisitedHousesCount = (instructions) => {
  const santaLocation = [0, 0];
  const visitedHouses = new Set();
  visitedHouses.add(santaLocation.toString());

  const instructionsToMove = {
    'v': () => santaLocation[1] -= 1,
    '^': () => santaLocation[1] += 1,
    '<': () => santaLocation[0] -= 1,
    '>': () => santaLocation[0] += 1,
  };

  for(const instruction of instructions) {
    instructionsToMove[instruction]();

    visitedHouses.add(santaLocation.toString());
  };

  return visitedHouses.size;
};

exports.getVisitedHousesCount = getVisitedHousesCount;