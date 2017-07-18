const curryN = require('../curryN/curryN');


/**
 * Calls provided function (first argument) with given values (all other arguments).
 *
 * @since v1.0.0
 *
 * @param {Function} fn function to call
 * @param {...*} args list of arguments to call function with
 * @return {*} result of calling function with given list of arguments
 *
 * @example
 * N.call(console.log, 'hello', 'nier'); // -> same as console.log('hello', 'nier')
 * N.call(N.clamp(1, 10), 15); // -> same as N.clamp(1, 10, 15)
 * N.call(N.has('nier'), { nier: 'hello' }); // -> same as N.has('nier', { nier: 'hello' })
 */
function call(fn, ...args) {
  if (typeof fn !== 'function') {
    throw new Error('N.call received first argument which type is not function');
  }

  return fn(...args);
}

module.exports = curryN(2, call);
