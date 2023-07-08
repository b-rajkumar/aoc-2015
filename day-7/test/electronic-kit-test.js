const { describe, it } = require('node:test');
const { deepStrictEqual } = require('assert');
const { ElectronicKit } = require('../src/electronic-kit');

describe('ElectronicKit', () => {
  describe('getWires', () => {
    it('should return empty object at start', () => {
      const electronicKit = new ElectronicKit();
      const expected = {};
      const actual = electronicKit.getWires();

      deepStrictEqual(actual, expected);
    });
  });

  describe('execute', () => {
    it('should assign a signal value to a wire and add it to the wires', () => {
      const electronicKit = new ElectronicKit();
      const instructions = [{
        name: 'assign',
        input: [10],
        output: 'a'
      }];

      electronicKit.execute(instructions);
      const expected = { a: 10 };
      const actual = electronicKit.getWires();

      deepStrictEqual(actual, expected);
    });

    it('should perform "and" operation between two input wires and assign the output to a wire', () => {
      const electronicKit = new ElectronicKit();
      const instructions = [
        {
          name: 'assign',
          input: [10],
          output: 'a'
        },
        {
          name: 'assign',
          input: [2],
          output: 'b'
        },
        {
          name: 'and',
          input: ['a', 'b'],
          output: 'c'
        }
      ];

      electronicKit.execute(instructions);
      const expected = { a: 10, b: 2, c: 2 };
      const actual = electronicKit.getWires();

      deepStrictEqual(actual, expected);
    });
  });
});