const test = require('tape-catch');
const isPlaceholder = require('./isPlaceholder');
const __ = require('../../__/__');

test('_internal/isPlaceholder', (t) => {
  t.true(
    isPlaceholder(__),
    'detects placeholder'
  );

  t.false(
    isPlaceholder({}),
    'detects object that is not placeholder'
  );

  t.false(
    isPlaceholder(null),
    'detects null as not placeholder value'
  );

  t.false(
    isPlaceholder(undefined),
    'detects undefined as not placeholder value'
  );

  t.end();
});
