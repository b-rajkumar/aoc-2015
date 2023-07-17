const { describe, it } = require('node:test');
const assert = require('assert');
const { calculateOccupiedMemory, calculateBytesInEncodedString } = require('../src/memory');

describe('calculateOccupiedMemory', () => {
  it('should give 0 when the given data is empty string', () => {
    const data = '""';
    const occupiedMemoryInBytes = calculateOccupiedMemory(data);

    assert.strictEqual(occupiedMemoryInBytes, 0);
  });

  it('should give the number of bytes occupied by the given data with no escape sequences', () => {
    const data = '"abc"';
    const occupiedMemoryInBytes = calculateOccupiedMemory(data);

    assert.strictEqual(occupiedMemoryInBytes, 3);
  });

  it('should give the number of bytes occupied by the given data having a single, escaped double quote', () => {
    const data = '"aaa\\"aaa"';
    const occupiedMemoryInBytes = calculateOccupiedMemory(data);

    assert.strictEqual(occupiedMemoryInBytes, 7);
  });

  it('should give the number of bytes occupied by the data having a escaped hexadecimal notation', () => {
    const data = '"\\x27"';
    const occupiedMemoryInBytes = calculateOccupiedMemory(data);

    assert.strictEqual(occupiedMemoryInBytes, 1);
  });

  it('should give the number of bytes occupied by the data having a escaped backslash', () => {
    const data = '"\\\\ab"';
    const occupiedMemoryInBytes = calculateOccupiedMemory(data);

    assert.strictEqual(occupiedMemoryInBytes, 3);
  });
});

describe('calculateBytesInEncodedString', () => {
  it('should give 2 when the given data is empty string', () => {
    const data = "";
    const encodedStringLength = calculateBytesInEncodedString(data);

    assert.strictEqual(encodedStringLength, 2);
  });

  it('should give 4 when the given data is a single quote', () => {
    const data = "\"";
    const encodedStringLength = calculateBytesInEncodedString(data);

    assert.strictEqual(encodedStringLength, 4);
  });

  it('should give 4 when the given data is a back-slash', () => {
    const data = "\\";
    const encodedStringLength = calculateBytesInEncodedString(data);

    assert.strictEqual(encodedStringLength, 4);
  });
});