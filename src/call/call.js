const curry = require('../curry/curry');
const isFunction = require('../isFunction/isFunction');


/**
 * Calls provided function with given arguments.
 *
 * @param {Function} fn function to call
 * @param {...*} args list of arguments to call function with
 * @return {*} result of calling function with given list of arguments
 */
function call(fn, ...args) {
  if (!isFunction(fn)) {
    throw new Error('N.call received first argument which type is not function');
  }

  return fn(...args);
}

module.exports = curry(call, 2);
