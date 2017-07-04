const test = require('tape-catch');
const validateLength = require('./validateLength');

test('_internal/validateLength', (t) => {
  t.equals(
    validateLength(10),
    true,
    'returns true if length is valid number'
  );

  t.equals(
    validateLength(-1) || validateLength(2.2) || validateLength(Number.MAX_SAFE_INTEGER + 1),
    false,
    'returns false if length is invalid number'
  );

  t.equals(
    validateLength(null) || validateLength('nier') || validateLength([]) || validateLength(Symbol('a')),
    false,
    'returns false if length is invalid value type'
  );

  t.end();
});
