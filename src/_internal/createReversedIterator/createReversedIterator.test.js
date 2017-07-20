const test = require('tape-catch');
const testUtils = require('../../../testUtils');
const createReversedIterator = require('./createReversedIterator');

test.only('_internal/createReversedIterator', (t) => {
  testUtils.isCurried(t, createReversedIterator((a, b) => a + b)(1), 'produces curried function');

  t.true(
    createReversedIterator((a, b) => a + b)['@@nier/reversedIterator'],
    'creates reversedIterator static property on curried function'
  );

  t.end();
});
