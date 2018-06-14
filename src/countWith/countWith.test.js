const test = require('tape-catch');
const testUtils = require('../../testUtils');
const countWith = require('./countWith');
const ArgumentError = require('../_internal/ArgumentError/ArgumentError');

test('N.countWith', (t) => {
  testUtils.isCurried(t, countWith(f => f));
  testUtils.noIndex(t, { fn: countWith, data: [1, 2, 3], result: 3 });
  testUtils.withIndex(t, { fn: countWith, data: [1, 2], indexResult: 1, dataResult: 2 });

  t.throws(() => countWith(null, []), ArgumentError, 'validates first argument');
  t.throws(() => countWith(item => item === 1, null), ArgumentError, 'validates second argument');

  t.equals(countWith(item => item === 1, [1, 2, 3, 1, 1]), 3, 'detects right countWith of existing items');
  t.equals(countWith(item => item === 1, [2, 3, 4]), 0, 'detects right amount of unexisting items');

  t.end();
});
