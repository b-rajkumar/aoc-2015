const { describe, it } = require('node:test');
const { strictEqual } = require('assert');
const { Light } = require('../src/light');

describe('Light', () => {
  describe('getBrightness', () => {
    it('should return 0 as it is the initial brightness of the light', () => {
      const bulb = new Light();
      const actual = bulb.getBrightness();
      const expected = 0;

      strictEqual(actual, expected);
    });

    it('should be in unlit state after creation', () => {
      const bulb = new Light();
      const actual = bulb.isLit();
      const expected = false;

      strictEqual(actual, expected);
    });
  });


  describe('lit', () => {
    it('should lit up the light', () => {
      const bulb = new Light();
      bulb.lit();
      const actual = bulb.isLit();
      const expected = true;

      strictEqual(actual, expected);
    });

    it('should increase the brightness of the light by 1', () => {
      const bulb = new Light();
      bulb.lit();
      const actual = bulb.getBrightness();
      const expected = 1;

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

    it('should decrease the brightness of the light by 1', () => {
      const bulb = new Light();
      bulb.lit();
      bulb.lit();
      bulb.lit();
      bulb.unlit();
      const actual = bulb.getBrightness();
      const expected = 2;

      strictEqual(actual, expected);
    });

    it('should not decrease the brightness below 0', () => {
      const bulb = new Light();
      bulb.unlit();
      const actual = bulb.getBrightness();
      const expected = 0;

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

    it('should increase the brightness of the light by 2', () => {
      const bulb = new Light();
      bulb.toggle();
      const actual = bulb.getBrightness();
      const expected = 2;

      strictEqual(actual, expected);
    });
  });
});
