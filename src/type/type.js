const curry = require('../curry/curry');


/**
 * Returns single word description of the value type
 *
 * @since v1.0.0
 *
 * @param  {*} value
 * @return {string}
 *
 * @example
 * N.type(null); // -> 'Null'
 * N.type(undefined); // -> 'Undefined'
 * N.type('hello'); // -> 'String'
 * N.type(1); // -> 'Number'
 * N.type({ a: 1 }); // -> 'Object'
 * N.type([1, 2]); // -> 'Array'
 * N.type(f => f); // -> 'Function'
 */
function type(value) {
  if (value === null) {
    return 'Null';
  }

  if (value === undefined) {
    return 'Undefined';
  }

  return Object.prototype.toString.call(value).slice(8, -1);
}

module.exports = curry(type);
