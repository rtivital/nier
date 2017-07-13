module.exports = function isCurried(t, value) {
  t.equals(typeof value, 'function', 'is curried');
};
