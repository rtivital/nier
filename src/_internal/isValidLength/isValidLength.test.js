const test = require('tape-catch');
const isValidLength = require('./isValidLength');

test('_internal/isValidLength', (t) => {
  t.true(isValidLength(10), 'returns true if length is valid number');
  t.false(isValidLength(-1), 'return false if length is less than zero');
  t.false(isValidLength(0.6), 'returns false if length is float');
  t.false(isValidLength(Number.MAX_SAFE_INTEGER + 1), 'returns false if length is greater than max safe integer');
  t.false(isValidLength('1'), 'returns false if length has a wrong type');

  t.end();
});
