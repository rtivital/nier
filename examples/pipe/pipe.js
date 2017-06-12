function pipe(...fns) {
  const applyFunctions = (...args) => fns.reduce(
    (acc, fn) => (acc ? fn(acc) : fn(...args)),
    null
  );

  return (...args) => applyFunctions(...args);
}

module.exports = pipe;
