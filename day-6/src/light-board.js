class LightBoard {
  #lights
  constructor(lights) {
    this.#lights = lights;
  }

  execute(instructions) {
    instructions.forEach(instruction => {
      const { name, columnStart, columnEnd, rowEnd, rowStart } = instruction;
      const instructionManual = {
        "on": (light) => light.lit(),
        "off": (light) => light.unlit(),
        "toggle": (light) => light.toggle(),
      };

      const instructionToExecute = instructionManual[name] || function() { };

      for(let row = rowStart; row <= rowEnd; row++) {
        for(let column = columnStart; column <= columnEnd; column++) {
          const light = this.#lights[row][column];
          instructionToExecute(light);
        }
      }
    });
  }

  litStatusOfLights() {
    return this.#lights.map(row => row.map(light => light.isLit()));
  }

  litLightsCount() {
    return this.#lights.flat().filter(light => light.isLit()).length;
  }

  totalBrightnessOfLights() {
    return this.#lights.flat().reduce((brightnessSum, light) => brightnessSum + light.getBrightness(), 0);
  }
};

module.exports = { LightBoard };