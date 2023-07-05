const isEven = (number) => number % 2 === 0;

class Coordinates {
  #x
  #y
  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  moveUp() {
    this.#y += 1;
  }

  moveDown() {
    this.#y -= 1;
  }

  moveLeft() {
    this.#x -= 1;
  }

  moveRight() {
    this.#x += 1;
  }

  toString() {
    return `${this.#x},${this.#y}`;
  }
};

const getVisitedHousesCount = (instructions) => {
  const santaLocation = new Coordinates(0, 0);
  const santaRoboLocation = new Coordinates(0, 0);
  const visitedHouses = new Set();
  visitedHouses.add(santaLocation.toString());

  const instructionsToMove = {
    'v': (location) => location.moveDown(),
    '^': (location) => location.moveUp(),
    '<': (location) => location.moveLeft(),
    '>': (location) => location.moveRight(),
  };

  Array.from(instructions).forEach((instruction, index) => {
    const location = isEven(index) ? santaLocation : santaRoboLocation;
    instructionsToMove[instruction](location);

    visitedHouses.add(location.toString());
  });

  return visitedHouses.size;
};

exports.getVisitedHousesCount = getVisitedHousesCount;
exports.Coordinates = Coordinates;