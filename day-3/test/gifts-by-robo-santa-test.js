const { describe, it, beforeEach } = require('node:test');
const { deepStrictEqual } = require('assert');
const { getVisitedHousesCount, Coordinates } = require('../src/gifts-by-robo-santa');

describe('getVisitedHousesCount', () => {
  it('should give the number of houses visited by santa and robo', () => {
    const moves = '^<';
    const expected = 3;
    const actual = getVisitedHousesCount(moves);

    deepStrictEqual(actual, expected);
  });

  it('should give the count of houses visited by santa or robo at least for one time', () => {
    const moves = '^v^v^v^v^v';
    const expected = 11;
    const actual = getVisitedHousesCount(moves);

    deepStrictEqual(actual, expected);
  });

  it('should give the count of houses visited by santa or robo', () => {
    const moves = '^>v<'
    const expected = 3;
    const actual = getVisitedHousesCount(moves);

    deepStrictEqual(actual, expected);
  });

});

describe('Coordinates', () => {
  let position;
  beforeEach(() => {
    position = new Coordinates(0, 0);
  });

  it('should move the position up by 1', () => {
    position.moveUp();
    const expected = '0,1';
    const actual = position.toString();

    deepStrictEqual(actual, expected);
  });

  it('should move the position down by 1', () => {
    position.moveDown();
    const expected = '0,-1';
    const actual = position.toString();

    deepStrictEqual(actual, expected);
  });

  it('should move the position left by 1', () => {
    position.moveLeft();
    const expected = '-1,0';
    const actual = position.toString();

    deepStrictEqual(actual, expected);
  });

  it('should move the position right by 1', () => {
    position.moveRight();
    const expected = '1,0';
    const actual = position.toString();

    deepStrictEqual(actual, expected);
  });

});