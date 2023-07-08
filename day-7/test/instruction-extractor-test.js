const { describe, it } = require('node:test');
const assert = require('assert');
const { extractInstruction } = require('../src/instructoin-extractor');

describe('extractInstruction', () => {
  it('should extract the instruction from the raw "assign" instruction', () => {
    const rawInstruction = ['123 -> x'];
    const expectedInstruction = [{
      operation: "ASSIGN",
      input: [123],
      output: 'x'
    }];

    const extractedInstruction = extractInstruction(rawInstruction);
    assert.deepStrictEqual(extractedInstruction, expectedInstruction);
  });

  it('should extract the instruction from the raw "not" instruction', () => {
    const rawInstruction = ['NOT go -> gp'];
    const expectedInstruction = [{
      operation: "NOT",
      input: ['go'],
      output: 'gp'
    }];

    const extractedInstruction = extractInstruction(rawInstruction);
    assert.deepStrictEqual(extractedInstruction, expectedInstruction);
  });

  it('should extract the instruction from the raw "and" instruction', () => {
    const rawInstruction = ['1 AND cx -> cy'];
    const expectedInstruction = [{
      operation: "AND",
      input: [1, 'cx'],
      output: 'cy'
    }];

    const extractedInstruction = extractInstruction(rawInstruction);
    assert.deepStrictEqual(extractedInstruction, expectedInstruction);
  });

  it('should extract the instruction from the raw "or" instruction', () => {
    const rawInstruction = ['at OR az -> ba'];
    const expectedInstruction = [{
      operation: "OR",
      input: ['at', 'az'],
      output: 'ba'
    }];

    const extractedInstruction = extractInstruction(rawInstruction);
    assert.deepStrictEqual(extractedInstruction, expectedInstruction);
  });

  it('should extract multiple instructions from the raw instruction', () => {
    const rawInstruction = ['at OR az -> ba', '1 AND cx -> cy', 'NOT go -> gp'];
    const expectedInstruction = [{
      operation: "OR",
      input: ['at', 'az'],
      output: 'ba'
    },
    {
      operation: "AND",
      input: [1, 'cx'],
      output: 'cy'
    },
    {
      operation: "NOT",
      input: ['go'],
      output: 'gp'
    }];

    const extractedInstruction = extractInstruction(rawInstruction);
    assert.deepStrictEqual(extractedInstruction, expectedInstruction);
  });
});