const getStarPosOfBasement = (instructions) => {
  let currentFloor = 0;
  let position = 0;
  const movements = {
    '(': 1,
    ')': -1
  };

  for(const instruction in instructions) {
    currentFloor += movements[instructions[instruction]];
    position += 1;
    if(currentFloor === -1) return position;
  };
};

exports.getStarPosOfBasement = getStarPosOfBasement;