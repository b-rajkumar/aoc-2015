const { describe, it } = require('node:test');
const { strictEqual } = require('assert');
const { Light } = require('../src/light');

describe('Light', () => {
  it('should be in unlit state after creation', () => {
    const bulb = new Light();
    const actual = bulb.isLit();
    const expected = false;

    strictEqual(actual, expected);
  });

  describe('lit', () => {
    it('should lit up the light', () => {
      const bulb = new Light();
      bulb.lit();
      const actual = bulb.isLit();
      const expected = true;

      strictEqual(actual, expected);
    });
  });

  describe('unlit', () => {
    it('should unlit the light', () => {
      const bulb = new Light();
      bulb.lit();
      bulb.unlit();
      const actual = bulb.isLit();
      const expected = false;

      strictEqual(actual, expected);
    });
  });


  describe('toggle', () => {
    it('should lit the light when it is in unlit state', () => {
      const bulb = new Light();
      bulb.unlit();
      bulb.toggle();

      const actual = bulb.isLit();
      const expected = true;

      strictEqual(actual, expected);
    });

    it('should unlit the light when it is in lit state', () => {
      const bulb = new Light();
      bulb.lit();
      bulb.toggle();

      const actual = bulb.isLit();
      const expected = false;

      strictEqual(actual, expected);
    });
  });
});
