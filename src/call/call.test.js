const test = require('tape-catch');
const testUtils = require('../../testUtils/');
const ArgumentError = require('../_internal/ArgumentError/ArgumentError');
const call = require('./call');

test('N.call', (t) => {
  testUtils.isCurried(t, call(f => f));

  t.throws(() => call(1, 'hello'), ArgumentError, 'throws error if received non-function first argument');

  t.equals(call(f => f, 1), 1, 'provides single argument to callback function');
  t.equals(call((a, b) => a + b)(2, 45), 47, 'provides multiple arguments to callback function');

  t.end();
});
