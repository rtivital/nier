module.exports = function compose(...fns) {
  if (fns.length === 0) {
    throw new Error('pipe requires at least one function argument');
  }

  const lastFunction = fns[fns.length - 1];
  const tailFunctions = fns.slice(0, fns.length - 1).reverse();

  return (...args) => tailFunctions.reduce(
    (acc, fn) => fn(acc),
    lastFunction(...args)
  );
};
