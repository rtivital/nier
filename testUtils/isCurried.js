module.exports = function isCurried(t, value, message = 'is curried') {
  t.true(
    typeof value === 'function' && typeof value() === 'function' && typeof value()()() === 'function',
    message
  );
};
