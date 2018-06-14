const test = require('tape-catch');
const validateArgumentType = require('./validateArgumentType');
const ArgumentError = require('../ArgumentError/ArgumentError');

test('N._internal/validateArgumentType', (t) => {
  t.throws(() => validateArgumentType('testFunction', 0, 'String', null), ArgumentError, 'throws a valid error type');

  t.doesNotThrow(
    () => validateArgumentType('testFunction', 0, 'String', ''),
    'does not throw argument has a valid type'
  );

  t.end();
});
