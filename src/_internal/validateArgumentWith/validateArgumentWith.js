const ArgumentError = require('../ArgumentError/ArgumentError');

function validateArgumentWith({ functionName, argumentPosition, predicate, value, message }) {
  if (!predicate(value)) {
    throw new ArgumentError(`${functionName} expected argument at position \`${argumentPosition}\` to ${message}`);
  }
}

module.exports = validateArgumentWith;
