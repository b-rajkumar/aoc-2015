const extractInstruction = (rawInstructions) => {
  return rawInstructions.map(rawInstruction => {
    const [prefix, suffix] = rawInstruction.split('->');
    const tokens = prefix.trim().split(' ');
    const tokenCount = tokens.length;
    const input = [];
    const output = suffix.trim();
    let operation = "ASSIGN";

    tokens.forEach((token, index) => {
      const number = parseInt(token);

      tokens[index] = isNaN(number) ? token : number;
    });

    if(tokenCount === 1) input.push(tokens[0]);
    if(tokenCount === 2) {
      operation = tokens[0];
      input.push(tokens[1]);
    };
    if(tokenCount === 3) {
      operation = tokens[1];
      input.push(tokens[0], tokens[2]);
    };

    return {
      operation,
      input,
      output
    };
  });
};

module.exports = { extractInstruction };