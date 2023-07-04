const getFloorNumber = (instructions) => {
  let currentFloor = 0;
  const movements = {
    '(': 1,
    ')': -1
  };
  instructions.split('').forEach(instruction => currentFloor += movements[instruction]);

  return currentFloor;
}

exports.getFloorNumber = getFloorNumber;