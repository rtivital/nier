const arity = require('../arity/arity');

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
