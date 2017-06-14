module.exports = function complement(fn) {
  if (typeof fn !== 'function') {
    throw new Error('complement received argument that is not function');
  }

  return (...args) => !fn(...args);
};
