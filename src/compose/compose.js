const reverse = require('../reverse/reverse');

module.exports = function compose(...fns) {
  if (fns.length === 0) {
    throw new Error('compose requires at least one function argument');
  }

  const lastFunction = fns[fns.length - 1];
  const tailFunctions = reverse(fns.slice(0, fns.length - 1));

  return (...args) => tailFunctions.reduce(
    (acc, fn) => fn(acc),
    lastFunction(...args)
  );
};
