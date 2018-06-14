/**
 * Internal – this class is not available in public api.
 *
 * Creates all argument related errors.
 *
 * @since v1.0.0
 * @category Internal
 *
 * @param {string} functionName name of function at which error occured
 * @param {number} argumentPosition position of tested argument
 * @param {string} expectedType expected argument type
 * @param {*} valueType argument value type
 *
 * @example
 * const argumentError = new ArgumentError('N._internal/ArgumentError expected argument at position `1` to have type: `String`, instead got: `Number`');
 *
 * argumentError.message; // -> 'N._internal/ArgumentError expected argument at position `1` to have type: `String`, instead got: `Number`'
 * argumentError.toString(); // -> 'ArgumentError: N._internal/ArgumentError expected argument at position `1` to have type: `String`, instead got: `Number`'
 */
class ArgumentError extends Error {
  constructor(message) {
    super();
    this.message = message;
    this.name = 'ArgumentError';
  }
}

module.exports = ArgumentError;
