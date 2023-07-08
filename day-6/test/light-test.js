const { describe, it } = require('node:test');
const assert = require('assert');
const { Light } = require('../src/light');

describe('Light', () => {
  describe('getBrightness', () => {
    it('should return 0 as it is the initial brightness of the light', () => {
      const bulb = new Light();
      const brightness = bulb.getBrightness();

      assert.strictEqual(brightness, 0);
    });

    it('should be in unlit state after creation', () => {
      const bulb = new Light();
      const actual = bulb.isLit();
      const expected = false;

      assert.strictEqual(actual, expected);
    });
  });


  describe('lit', () => {
    it('should lit up the light', () => {
      const bulb = new Light();
      bulb.lit();
      const isLit = bulb.isLit();

      assert.strictEqual(isLit, true);
    });

    it('should increase the brightness of the light by 1', () => {
      const bulb = new Light();
      bulb.lit();
      const brightness = bulb.getBrightness();

      assert.strictEqual(brightness, 1);
    });
  });

  describe('unlit', () => {
    it('should unlit the light', () => {
      const bulb = new Light();
      bulb.lit();
      bulb.unlit();
      const isLit = bulb.isLit();

      assert.strictEqual(isLit, false);
    });

    it('should decrease the brightness of the light by 1', () => {
      const bulb = new Light();
      bulb.lit();
      bulb.lit();
      bulb.lit();
      bulb.unlit();
      const brightness = bulb.getBrightness();

      assert.strictEqual(brightness, 2);
    });

    it('should not decrease the brightness below 0', () => {
      const bulb = new Light();
      bulb.unlit();
      const brightness = bulb.getBrightness();

      assert.strictEqual(brightness, 0);
    });
  });

  describe('toggle', () => {
    it('should lit the light when it is in unlit state', () => {
      const bulb = new Light();
      bulb.unlit();
      bulb.toggle();

      const isLit = bulb.isLit();

      assert.strictEqual(isLit, true);
    });

    it('should unlit the light when it is in lit state', () => {
      const bulb = new Light();
      bulb.lit();
      bulb.toggle();

      const actual = bulb.isLit();
      const expected = false;

      assert.strictEqual(actual, expected);
    });

    it('should increase the brightness of the light by 2', () => {
      const bulb = new Light();
      bulb.toggle();
      const brightness = bulb.getBrightness();

      assert.strictEqual(brightness, 2);
    });
  });
});
