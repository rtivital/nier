const test = require('tape-catch');
const validateLength = require('./validateLength');

test('_internal/validateLength', (t) => {
  t.true(validateLength(10), 'returns true if length is valid number');
  t.false(validateLength(-1), 'return false if length is less than zero');
  t.false(validateLength(0.6), 'returns false if length is float');
  t.false(validateLength(Number.MAX_SAFE_INTEGER + 1), 'returns false if length is greater than max safe integer');
  t.false(validateLength('1'), 'returns false if length has a wrong type');

  t.end();
});
