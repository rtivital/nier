const test = require('tape-catch');
const validateLength = require('./validateLength');

test('_internal/validateLength', (t) => {
  t.true(
    validateLength(10),
    'returns true if length is valid number'
  );

  t.false(
    validateLength(-1) || validateLength(2.2) || validateLength(Number.MAX_SAFE_INTEGER + 1),
    'returns false if length is invalid number'
  );

  t.false(
    validateLength(null) || validateLength('nier') || validateLength([]) || validateLength(Symbol('a')),
    'returns false if length is invalid value type'
  );

  t.end();
});
