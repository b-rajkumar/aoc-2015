const extractInstruction = (rawInstruction) => {
  const tokens = rawInstruction.split(' ');
  if(tokens[0] === 'turn') tokens.splice(0, 1);

  const [name, startingCoordinates, , endingCoordinates] = tokens;
  const [c1, r1] = startingCoordinates.split(',');
  const [c2, r2] = endingCoordinates.split(',');

  return {
    name,
    columnStart: parseInt(c1),
    columnEnd: parseInt(c2),
    rowStart: parseInt(r1),
    rowEnd: parseInt(r2)
  };
};

module.exports = { extractInstruction };