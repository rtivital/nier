function pipe(...fns) {
  if (fns.length === 0) {
    throw new Error('pipe requires at least one argument');
  }

  const applyFunctions = (...args) => fns.reduce(
    (acc, fn) => (acc ? fn(acc) : fn(...args)),
    null
  );

  return (...args) => applyFunctions(...args);
}

module.exports = pipe;
