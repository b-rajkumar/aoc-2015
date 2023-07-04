const getStarPosOfBasement = (instructions) => {
  let currentFloor = 0;
  let position = 0;
  const movements = {
    '(': 1,
    ')': -1
  };

  instructions.split('').some((instruction) => {
    currentFloor += movements[instruction]
    position += 1;
    return currentFloor === -1
  });

  return position;
};

exports.getStarPosOfBasement = getStarPosOfBasement;