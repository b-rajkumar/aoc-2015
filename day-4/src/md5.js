const crypto = require('crypto')

const generateMd5 = (message) => {
  return crypto.createHash('md5').update(message).digest("hex");
};

const generateMd5MessageForLeadingZeros = (messagePrefix, count = 5) => {
  let postfix = 1;
  while(generateMd5(messagePrefix + postfix).slice(0, count) !== '0'.repeat(count)) {
    postfix += 1;
  }

  return messagePrefix + postfix;
};

exports.generateMd5MessageForLeadingZeros = generateMd5MessageForLeadingZeros;