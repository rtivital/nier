const isPlaceholder = require('../isPlaceholder/isPlaceholder');
const arity = require('../arity/arity');

function placeholderAmount(args) {
  let amount = 0;

  for (let i = 0, l = args.length; i < l; i += 1) {
    if (isPlaceholder(args[i])) {
      amount += 1;
    }
  }

  return amount;
}


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
  return arity(receivedArgs, (...args) => {
    const callsRemain = receivedArgs - (args.length - placeholderAmount(args));

    if (callsRemain > 0) {
      return curryN(callsRemain, acc.concat(args), fn);
    }

    return fn(...acc, ...args);
  });
}


module.exports = curryN;
