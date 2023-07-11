const extractInstruction = (rawInstructions) => {
  return rawInstructions.map(rawInstruction => {
    const [prefix, suffix] = rawInstruction.split('->');
    const tokens = prefix.trim().split(' ');
    const operators = ["OR", "AND", "LSHIFT", "RSHIFT", "NOT"];
    const component = {
      operation: "ASSIGN",
      input: [],
      output: suffix.trim()
    }

    tokens.forEach(token => {
      if(operators.includes(token)) component.operation = token;
      else if(isNaN(+token)) component.input.push(token);
      else component.input.push(+token);
    });

    return component;
  });
};

module.exports = { extractInstruction };