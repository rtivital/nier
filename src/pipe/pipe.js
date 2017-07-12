const reduce = require('../reduce/reduce');

module.exports = function pipe(...fns) {
  if (fns.length === 0) {
    throw new Error('pipe requires at least one function argument');
  }

  const firstFunction = fns[0];
  const tailFunctions = fns.slice(1);

  return (...args) => reduce(
    (acc, fn) => fn(acc),
    firstFunction(...args),
    tailFunctions
  );
};
