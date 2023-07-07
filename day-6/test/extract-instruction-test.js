const { describe, it } = require('node:test');
const { deepStrictEqual } = require('assert');
const { extractInstruction } = require('../src/extract-instruction');

describe('extractInstruction', () => {
  it('should extract the "on" instruction from the raw instruction', () => {
    const rawInstruction = 'turn on 0,0 through 999,999';
    const expected = {
      name: "on",
      rowStart: 0,
      rowEnd: 999,
      columnStart: 0,
      columnEnd: 999
    };
    const actual = extractInstruction(rawInstruction);

    deepStrictEqual(actual, expected);
  });

  it('should extract the "off" instruction from the raw instruction', () => {
    const rawInstruction = 'turn off 2,0 through 9,799';
    const expected = {
      name: "off",
      rowStart: 0,
      rowEnd: 799,
      columnStart: 2,
      columnEnd: 9
    };
    const actual = extractInstruction(rawInstruction);

    deepStrictEqual(actual, expected);
  });

  it('should extract the "toggle" instruction from the raw instruction', () => {
    const rawInstruction = 'toggle 1,2 through 5,7';
    const expected = {
      name: "toggle",
      rowStart: 2,
      rowEnd: 7,
      columnStart: 1,
      columnEnd: 5
    };
    const actual = extractInstruction(rawInstruction);

    deepStrictEqual(actual, expected);
  });
});