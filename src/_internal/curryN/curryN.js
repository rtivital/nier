const arity = require('../arity/arity');


/**
 * Internal – this function is not available in public api.
 *
 * Creates currried function with provided length.
 *
 * @since v1.0.0
 * @category Internal
 *
 * @param {number} receivedArgs length of function that should be returned
 * @param {Array} acc arguments accumulator
 * @param {Function} fn function that should be curried
 * @return {Function} curried function
 *
 * @example
 * const curried = curryN(2, [], (...args) => args[0] + args[1]);
 * curried.length; //-> 2
 * curried(1).length; // -> 1
 * curried()()()().length; // -> 2
 * curried('hello', ' there'); // -> 'hello there'
 */
function curryN(receivedArgs, acc, fn) {
  const callsRemain = receivedArgs || fn.length;

  return arity(callsRemain, (...args) => {
    if (callsRemain - args.length > 0) {
      return curryN(callsRemain - args.length, acc.concat(args), fn);
    }

    return fn(...acc, ...args);
  });
}


module.exports = curryN;
