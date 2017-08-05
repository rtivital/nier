const assignSignature = require('../_internal/assignSignature/assignSignature');

/**
 * Placeholder
 *
 * @example
 * const call = N.call(N.__, 1, 2);
 * call((a, b) => a + b); // -> 3
 */
const __ = {};

module.exports = assignSignature('placeholder', true, __);
