const { describe, it, beforeEach } = require('node:test');
const { deepStrictEqual, strictEqual } = require('assert');
const { LightBoard } = require('../src/light-board');
const { Light } = require('../src/light');

describe('LightBoard', () => {
  describe('litStatusOfLights', () => {
    it('should return the lit status of a light', () => {
      const light = new Light();
      const lightBoard = new LightBoard([[light]]);
      const expected = [[false]];
      const actual = lightBoard.litStatusOfLights();

      deepStrictEqual(actual, expected);
    });

    it('should return the lit status of the lights', () => {
      const firstLight = new Light();
      const secondLight = new Light();
      firstLight.lit();
      const lightBoard = new LightBoard([[firstLight, secondLight]]);
      const expected = [[true, false]];
      const actual = lightBoard.litStatusOfLights();

      deepStrictEqual(actual, expected);
    });
  });

  describe('execute', () => {
    let lightBoard;

    beforeEach(() => {
      lightBoard = new LightBoard([
        [new Light(), new Light(), new Light()],
        [new Light(), new Light(), new Light()],
        [new Light(), new Light(), new Light()],
      ]);
    });

    it('should lit up the lights in the given range', () => {
      const instruction = [{
        name: 'on',
        rowStart: 0,
        rowEnd: 1,
        columnStart: 0,
        columnEnd: 1
      }];
      lightBoard.execute(instruction);

      const expected = [
        [true, true, false],
        [true, true, false],
        [false, false, false],
      ];
      const actual = lightBoard.litStatusOfLights();

      deepStrictEqual(actual, expected);
    });

    it('should unlit the lights in the given range', () => {
      const instructions = [
        {
          name: 'on',
          rowStart: 0,
          rowEnd: 1,
          columnStart: 1,
          columnEnd: 2
        },
        {
          name: 'off',
          rowStart: 1,
          rowEnd: 1,
          columnStart: 1,
          columnEnd: 2
        }
      ];
      lightBoard.execute(instructions);

      const expected = [
        [false, true, true],
        [false, false, false],
        [false, false, false]
      ];
      const actual = lightBoard.litStatusOfLights();

      deepStrictEqual(actual, expected);
    });

    it('should toggle the state of lights from lit to unlit and unlit to lit in the given range', () => {
      const instructions = [
        {
          name: 'on',
          rowStart: 0,
          rowEnd: 0,
          columnStart: 1,
          columnEnd: 2
        },
        {
          name: 'toggle',
          rowStart: 0,
          rowEnd: 2,
          columnStart: 1,
          columnEnd: 1
        }
      ];

      lightBoard.execute(instructions);
      const expected = [
        [false, false, true],
        [false, true, false],
        [false, true, false]
      ];
      const actual = lightBoard.litStatusOfLights();

      deepStrictEqual(actual, expected);
    });
  });

  describe('litLightsCount', () => {
    let lightBoard;

    beforeEach(() => {
      lightBoard = new LightBoard([
        [new Light(), new Light(), new Light()],
        [new Light(), new Light(), new Light()],
        [new Light(), new Light(), new Light()],
      ]);
    });

    it('should return 0 if all lights are in off state', () => {
      const expected = 0;
      const actual = lightBoard.litLightsCount();

      strictEqual(actual, expected);
    });

    it('should return the count of lights that are in lit state', () => {
      const instruction = [{
        name: 'on',
        rowStart: 0,
        rowEnd: 1,
        columnStart: 1,
        columnEnd: 2
      }];

      lightBoard.execute(instruction);

      const expected = 4;
      const actual = lightBoard.litLightsCount();

      strictEqual(actual, expected);
    });
  });

  describe('totalBrightnessOfLights', () => {
    it('should return the total brightness of the lights', () => {
      const lightBoard = new LightBoard([
        [new Light(), new Light(), new Light()],
        [new Light(), new Light(), new Light()],
        [new Light(), new Light(), new Light()],
      ]);

      const instruction = [{
        name: 'on',
        rowStart: 0,
        rowEnd: 1,
        columnStart: 0,
        columnEnd: 1
      },
      {
        name: 'toggle',
        rowStart: 0,
        rowEnd: 1,
        columnStart: 0,
        columnEnd: 0
      },
      {
        name: 'off',
        rowStart: 0,
        rowEnd: 0,
        columnStart: 0,
        columnEnd: 0
      }
      ];
      lightBoard.execute(instruction);

      const expected = 7;
      const actual = lightBoard.totalBrightnessOfLights();

      deepStrictEqual(actual, expected);
    });
  })
});