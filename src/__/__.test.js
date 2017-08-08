const test = require('tape-catch');
const __ = require('./__');
const _SIGNATURES = require('../_internal/signatures');

test('__', (t) => {
  t.true(
    __[_SIGNATURES.placeholder],
    'has hidden placeholder signature'
  );

  t.end();
});
