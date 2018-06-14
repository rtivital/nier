const type = require('../../type/type');
const ArgumentError = require('../ArgumentError/ArgumentError');

/**
 * Internal – this function is not available in public api.
 *
 * Compares type of the values with the expected type. If types do not match, throws an ArgumentError.
 *
 * @since v1.0.0
 * @category Internal
 *
 * @param {string} functionName name of function at which error occured
 * @param {number} argumentPosition position of tested argument
 * @param {string} expectedType expected argument type
 * @param {*} value argument value
 *
 * @example
 * validateArgumentType('N.amount', 0, 'Function', null); // -> throws an ArgumentError
 * validateArgumentType('N.amount', 0, 'Function', f => f); // -> does nothing
 */
function validateArgumentType(functionName, argumentPosition, expectedType, value) {
  const valueType = type(value);

  if (type(value) !== expectedType) {
    throw new ArgumentError({ functionName, argumentPosition, expectedType, valueType });
  }
}

module.exports = validateArgumentType;
