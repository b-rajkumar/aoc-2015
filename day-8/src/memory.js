const calculateOccupiedMemory = (data) => {
  const bytesCount = data.replaceAll(/\\\\/g, '1')
    .replaceAll(/\\"/g, '1')
    .replaceAll(/\\x../g, '1').length;
  return bytesCount - 2;
};

const calculateBytesInEncodedString = (data) => {
  const bytesCount = data.replaceAll(/"/g, '11')
    .replaceAll(/\\/g, '11').length;
  return bytesCount + 2;
};

module.exports = { calculateOccupiedMemory, calculateBytesInEncodedString };