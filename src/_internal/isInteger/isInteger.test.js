const test = require('tape-catch');
const isInteger = require('./isInteger');

test('N._internal/isInteger', (t) => {
  t.true(isInteger(1), 'returns true when called with integer');
  t.false(isInteger(1.5), 'returns false when called with float');
  t.false(isInteger('1.5'), 'returns false when called with string');

  t.end();
});
