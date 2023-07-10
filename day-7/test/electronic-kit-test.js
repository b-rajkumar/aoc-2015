const { describe, it } = require('node:test');
const assert = require('assert');
const { ElectronicCircuit, makeCircuit } = require('../src/electronic-kit');

describe('electronicCircuit', () => {
  describe('getWires', () => {
    it('should return empty object at start', () => {
      const electronicCircuit = new ElectronicCircuit();
      const wires = electronicCircuit.getWires();

      assert.deepStrictEqual(wires, {});
    });
  });

  describe('execute', () => {
    it('should ASSIGN a signal value to a wire AND add it to the wires', () => {
      const electronicCircuit = new ElectronicCircuit();
      const instructions = {
        operation: 'ASSIGN',
        input: [10],
        output: 'a'
      };

      electronicCircuit.execute(instructions);
      const wires = electronicCircuit.getWires();

      assert.deepStrictEqual(wires, { a: 10 });
    });

    it('should perform "AND" operation between two input wires and assign the output to a wire', () => {
      const electronicCircuit = new ElectronicCircuit();
      let instruction = {
        operation: 'ASSIGN',
        input: [10],
        output: 'a'
      };
      electronicCircuit.execute(instruction);

      instruction = {
        operation: 'ASSIGN',
        input: [2],
        output: 'b'
      };
      electronicCircuit.execute(instruction);

      instruction = {
        operation: 'AND',
        input: ['a', 'b'],
        output: 'c'
      };
      electronicCircuit.execute(instruction);
      const wires = electronicCircuit.getWires();

      assert.deepStrictEqual(wires, { a: 10, b: 2, c: 2 });
    });

    it('should perform "AND" operation between a input wire AND a number and assign the output to a wire', () => {
      const electronicCircuit = new ElectronicCircuit();
      let instruction = {
        operation: 'ASSIGN',
        input: [10],
        output: 'a'
      };
      electronicCircuit.execute(instruction);

      instruction = {
        operation: 'AND',
        input: [3, 'a'],
        output: 'b'
      };
      electronicCircuit.execute(instruction);
      const wires = electronicCircuit.getWires();

      assert.deepStrictEqual(wires, { a: 10, b: 2 });
    });

    it('should perform "AND" operation between two numbers and assign the output to a wire', () => {
      const electronicCircuit = new ElectronicCircuit();
      const instructions = {
        operation: 'AND',
        input: [3, 5],
        output: 'b'
      };

      electronicCircuit.execute(instructions);
      const wires = electronicCircuit.getWires();

      assert.deepStrictEqual(wires, { b: 1 });
    });

    it('should perform "OR" operation between two input wires and assign the output to a wire', () => {
      const electronicCircuit = new ElectronicCircuit();
      let instruction = {
        operation: 'ASSIGN',
        input: [10],
        output: 'a'
      };
      electronicCircuit.execute(instruction);

      instruction = {
        operation: 'ASSIGN',
        input: [2],
        output: 'b'
      };
      electronicCircuit.execute(instruction);

      instruction = {
        operation: 'OR',
        input: ['a', 'b'],
        output: 'c'
      };
      electronicCircuit.execute(instruction);
      const wires = electronicCircuit.getWires();

      assert.deepStrictEqual(wires, { a: 10, b: 2, c: 10 });
    });

    it('should perform "OR" operation between a input wire AND a number and assign the output to a wire', () => {
      const electronicCircuit = new ElectronicCircuit();
      let instruction = {
        operation: 'ASSIGN',
        input: [10],
        output: 'a'
      };
      electronicCircuit.execute(instruction);

      instruction = {
        operation: 'OR',
        input: [3, 'a'],
        output: 'b'
      };
      electronicCircuit.execute(instruction);
      const wires = electronicCircuit.getWires();

      assert.deepStrictEqual(wires, { a: 10, b: 11 });
    });

    it('should perform "OR" operation between two numbers and assign the output to a wire', () => {
      const electronicCircuit = new ElectronicCircuit();
      const instruction = {
        operation: 'OR',
        input: [3, 5],
        output: 'b'
      };

      electronicCircuit.execute(instruction);
      const wires = electronicCircuit.getWires();

      assert.deepStrictEqual(wires, { b: 7 });
    });

    it('should perform "NOT" operation on a input wire signal and assign the output to the output wire', () => {
      const electronicCircuit = new ElectronicCircuit();
      let instruction = {
        operation: 'ASSIGN',
        input: [1],
        output: 'a'
      };
      electronicCircuit.execute(instruction);

      instruction = {
        operation: 'NOT',
        input: ['a'],
        output: 'b'
      };

      electronicCircuit.execute(instruction);
      const wires = electronicCircuit.getWires();

      assert.deepStrictEqual(wires, { a: 1, b: 65534 });
    });

    it('should perform "NOT" operation on a number and assign the output to the output wire', () => {
      const electronicCircuit = new ElectronicCircuit();
      let instruction = {
        operation: 'NOT',
        input: [5],
        output: 'b'
      };

      electronicCircuit.execute(instruction);
      const wires = electronicCircuit.getWires();

      assert.deepStrictEqual(wires, { b: 65530 });
    });

    it('should perform "LSHIFT" operation on a input wire signal and assign the output to the output wire', () => {
      const electronicCircuit = new ElectronicCircuit();
      let instruction = {
        operation: 'ASSIGN',
        input: [7],
        output: 'a'
      };
      electronicCircuit.execute(instruction);

      instruction = {
        operation: 'LSHIFT',
        input: ['a', 1],
        output: 'b'
      };

      electronicCircuit.execute(instruction);
      const wires = electronicCircuit.getWires();

      assert.deepStrictEqual(wires, { a: 7, b: 14 });
    });

    it('should perform "RSHIFT" operation on a input wire signal and assign the output to the output wire', () => {
      const electronicCircuit = new ElectronicCircuit();
      let instruction = {
        operation: 'ASSIGN',
        input: [7],
        output: 'a'
      };
      electronicCircuit.execute(instruction);

      instruction = {
        operation: 'RSHIFT',
        input: ['a', 1],
        output: 'b'
      };

      electronicCircuit.execute(instruction);
      const wires = electronicCircuit.getWires();

      assert.deepStrictEqual(wires, { a: 7, b: 3 });
    });
  });

  describe('makeCircuit', () => {
    it('should return false if the given does not make up the circuit', () => {
      const electronicCircuit = new ElectronicCircuit();
      const components = [
        {
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
        }
      ];

      const isCircuitMade = makeCircuit(components, electronicCircuit);

      assert.strictEqual(isCircuitMade, false);
    });

    it('should add component to the circuit when all the required wires are present', () => {
      const electronicCircuit = new ElectronicCircuit();
      const components = [
        {
          operation: "ASSIGN",
          input: [10],
          output: 'ba'
        },
        {
          operation: "ASSIGN",
          input: [1],
          output: 'cy'
        },
        {
          operation: "AND",
          input: ['ba', 'cy'],
          output: 'gp'
        }
      ];

      const isCircuitMade = makeCircuit(components, electronicCircuit);
      assert.strictEqual(isCircuitMade, true);

      const wires = electronicCircuit.getWires();
      assert.deepStrictEqual(wires, { 'ba': 10, 'cy': 1, 'gp': 0 })
    });
  });
});