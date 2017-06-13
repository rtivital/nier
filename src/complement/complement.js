module.exports = function complement(fn) {
  return (...args) => !fn(...args);
};
