module.exports = function isCurried(t, value, message = 'is curried') {
  t.equals(typeof value, 'function', message);
};
