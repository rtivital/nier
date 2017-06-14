module.exports = function flip(fn) {
  return (...args) => fn(...args.reverse());
};
