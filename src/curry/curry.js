module.exports = function curry(fn, receivedArgs = 0, acc = []) {
  if (typeof fn !== 'function') {
    throw new Error('curry received argument that is not function');
  }

  const callsRemain = receivedArgs || fn.length;

  return (...args) => {
    if (args.length < callsRemain - acc.length) {
      return curry(fn, callsRemain - 1, acc.concat(args));
    }

    return fn(...acc, ...args);
  };
};
