const arity = require('../arity/arity');

module.exports = function curry(receivedArgs = 0, acc = [], fn) {
  const callsRemain = receivedArgs || fn.length;

  return arity(callsRemain, (...args) => {
    if (args.length < callsRemain - acc.length) {
      return curry(callsRemain - 1, acc.concat(args), fn);
    }

    return fn(...acc, ...args);
  });
};
