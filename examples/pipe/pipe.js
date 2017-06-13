function pipe(...fns) {
  if (fns.length === 0) {
    throw new Error('pipe requires at least one argument');
  }

  return (...args) => fns.reduce(
    (acc, fn) => (acc ? fn(acc) : fn(...args)),
    null
  );
}

module.exports = pipe;
