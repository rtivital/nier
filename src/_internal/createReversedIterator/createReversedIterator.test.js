const test = require('tape-catch');
const testUtils = require('../../../testUtils');
const createReversedIterator = require('./createReversedIterator');
const _SIGNATURES = require('../signatures');

test('_internal/createReversedIterator', (t) => {
  testUtils.isCurried(t, createReversedIterator((a, b) => a + b)(1), 'produces curried function');

  t.true(
    createReversedIterator((a, b) => a + b)[_SIGNATURES.reversedIterator],
    'creates reversedIterator static property on curried function'
  );

  t.end();
});
