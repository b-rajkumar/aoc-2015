const { describe, it } = require('node:test');
const assert = require('assert');
const { ElectronicCircuit } = require('../src/electronic-kit');

describe('electronicCircuit', () => {
  describe('getWires', () => {
    it('should return empty object at start', () => {
      const electronicCircuit = new ElectronicCircuit();
      const wires = electronicCircuit.getWires();

      assert.deepStrictEqual(wires, {});
    });
  });

  describe('execute', () => {
    it('should assign a signal value to a wire and add it to the wires', () => {
      const electronicCircuit = new ElectronicCircuit();
      const instructions = {
        operation: 'assign',
        input: [10],
        output: 'a'
      };

      electronicCircuit.execute(instructions);
      const wires = electronicCircuit.getWires();

      assert.deepStrictEqual(wires, { a: 10 });
    });

    it('should perform "and" operation between two input wires and assign the output to a wire', () => {
      const electronicCircuit = new ElectronicCircuit();
      let instruction = {
        operation: 'assign',
        input: [10],
        output: 'a'
      };
      electronicCircuit.execute(instruction);

      instruction = {
        operation: 'assign',
        input: [2],
        output: 'b'
      };
      electronicCircuit.execute(instruction);

      instruction = {
        operation: 'and',
        input: ['a', 'b'],
        output: 'c'
      };
      electronicCircuit.execute(instruction);
      const wires = electronicCircuit.getWires();

      assert.deepStrictEqual(wires, { a: 10, b: 2, c: 2 });
    });

    it('should perform "and" operation between a input wire and a number and assign the output to a wire', () => {
      const electronicCircuit = new ElectronicCircuit();
      let instruction = {
        operation: 'assign',
        input: [10],
        output: 'a'
      };
      electronicCircuit.execute(instruction);

      instruction = {
        operation: 'and',
        input: [3, 'a'],
        output: 'b'
      };
      electronicCircuit.execute(instruction);
      const wires = electronicCircuit.getWires();

      assert.deepStrictEqual(wires, { a: 10, b: 2 });
    });

    it('should perform "and" operation between two numbers and assign the output to a wire', () => {
      const electronicCircuit = new ElectronicCircuit();
      const instructions = {
        operation: 'and',
        input: [3, 5],
        output: 'b'
      };

      electronicCircuit.execute(instructions);
      const wires = electronicCircuit.getWires();

      assert.deepStrictEqual(wires, { b: 1 });
    });

    it('should perform "or" operation between two input wires and assign the output to a wire', () => {
      const electronicCircuit = new ElectronicCircuit();
      let instruction = {
        operation: 'assign',
        input: [10],
        output: 'a'
      };
      electronicCircuit.execute(instruction);

      instruction = {
        operation: 'assign',
        input: [2],
        output: 'b'
      };
      electronicCircuit.execute(instruction);

      instruction = {
        operation: 'or',
        input: ['a', 'b'],
        output: 'c'
      };
      electronicCircuit.execute(instruction);
      const wires = electronicCircuit.getWires();

      assert.deepStrictEqual(wires, { a: 10, b: 2, c: 10 });
    });

    it('should perform "or" operation between a input wire and a number and assign the output to a wire', () => {
      const electronicCircuit = new ElectronicCircuit();
      let instruction = {
        operation: 'assign',
        input: [10],
        output: 'a'
      };
      electronicCircuit.execute(instruction);

      instruction = {
        operation: 'or',
        input: [3, 'a'],
        output: 'b'
      };
      electronicCircuit.execute(instruction);
      const wires = electronicCircuit.getWires();

      assert.deepStrictEqual(wires, { a: 10, b: 11 });
    });

    it('should perform "or" operation between two numbers and assign the output to a wire', () => {
      const electronicCircuit = new ElectronicCircuit();
      const instruction = {
        operation: 'or',
        input: [3, 5],
        output: 'b'
      };

      electronicCircuit.execute(instruction);
      const wires = electronicCircuit.getWires();

      assert.deepStrictEqual(wires, { b: 7 });
    });

    it('should perform "not" operation on a input wire signal and assign the output to the output wire', () => {
      const electronicCircuit = new ElectronicCircuit();
      let instruction = {
        operation: 'assign',
        input: [1],
        output: 'a'
      };
      electronicCircuit.execute(instruction);

      instruction = {
        operation: 'not',
        input: ['a'],
        output: 'b'
      };

      electronicCircuit.execute(instruction);
      const wires = electronicCircuit.getWires();

      assert.deepStrictEqual(wires, { a: 1, b: 65534 });
    });

    it('should perform "not" operation on a number and assign the output to the output wire', () => {
      const electronicCircuit = new ElectronicCircuit();
      let instruction = {
        operation: 'not',
        input: [5],
        output: 'b'
      };

      electronicCircuit.execute(instruction);
      const wires = electronicCircuit.getWires();

      assert.deepStrictEqual(wires, { b: 65530 });
    });

    it('should perform "lshift" operation on a input wire signal and assign the output to the output wire', () => {
      const electronicCircuit = new ElectronicCircuit();
      let instruction = {
        operation: 'assign',
        input: [7],
        output: 'a'
      };
      electronicCircuit.execute(instruction);

      instruction = {
        operation: 'lshift',
        input: ['a', 1],
        output: 'b'
      };

      electronicCircuit.execute(instruction);
      const wires = electronicCircuit.getWires();

      assert.deepStrictEqual(wires, { a: 7, b: 14 });
    });

    it('should perform "rshift" operation on a input wire signal and assign the output to the output wire', () => {
      const electronicCircuit = new ElectronicCircuit();
      let instruction = {
        operation: 'assign',
        input: [7],
        output: 'a'
      };
      electronicCircuit.execute(instruction);

      instruction = {
        operation: 'rshift',
        input: ['a', 1],
        output: 'b'
      };

      electronicCircuit.execute(instruction);
      const wires = electronicCircuit.getWires();

      assert.deepStrictEqual(wires, { a: 7, b: 3 });
    });
  });
});