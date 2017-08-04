const test = require('tape-catch');
const __ = require('./__');
const SIGNATURES = require('../_internal/signatures');

test('__', (t) => {
  t.true(
    __[SIGNATURES.placeholder],
    'has hidden placeholder signature'
  );

  t.end();
});
