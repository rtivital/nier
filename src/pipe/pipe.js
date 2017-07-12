const reduce = require('../reduce/reduce');
const slice = require('../slice/slice');
const head = require('../head/head');

module.exports = function pipe(...fns) {
  if (fns.length === 0) {
    throw new Error('pipe requires at least one function argument');
  }

  const firstFunction = head(fns);
  const tailFunctions = slice(1, fns.length, fns);

  return (...args) => reduce(
    (acc, fn) => fn(acc),
    firstFunction(...args),
    tailFunctions
  );
};
