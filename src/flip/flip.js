module.exports = function flip(fn) {
  if (typeof fn !== 'function') {
    throw new Error('flip received argument that is not function');
  }
  return (...args) => fn(...args.reverse());
};
