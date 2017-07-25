const curry = require('../curry/curry');


/**
 * Clamps number within provided min and max borders
 *
 * @since v1.0.0
 * @category Number
 *
 * @param {number} min lower border
 * @param {number} max upper border
 * @param {number} value number to clamp
 * @return {number} clamped number
 *
 * @example
 * N.clamp(10, 20, 100); // -> 20
 * N.clamp(-10, 20, -50); // -> -10
 * N.clamp(1.5, 1.9, 1.937); // -> 1.9
 */
function clamp(min, max, value) {
  if (min > max) {
    throw new Error('N.clamp: min must not be greater than max');
  }

  return Math.max(Math.min(value, max), min);
}

module.exports = curry(clamp);
