const type = require('../../type/type');
const ArgumentError = require('../ArgumentError/ArgumentError');

function validateArgumentType(functionName, argumentPosition, expectedType, value) {
  const valueType = type(value);

  if (type(value) !== expectedType) {
    throw new ArgumentError({ functionName, argumentPosition, expectedType, valueType });
  }
}

module.exports = validateArgumentType;
