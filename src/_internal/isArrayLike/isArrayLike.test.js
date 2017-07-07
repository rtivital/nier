const test = require('tape-catch');
const isArrayLike = require('./isArrayLike');

function getArguments() {
  return arguments; // eslint-disable-line
}

test('_internal/isArrayLike', (t) => {
  t.true(isArrayLike([1, 2]), 'detects array as array like value');
  t.true(isArrayLike([]), 'detects empty array as array like value');
  t.true(isArrayLike('nier'), 'detects string as array like value');
  t.true(isArrayLike(''), 'detects empty strin as array like value');
  t.true(isArrayLike({ 0: true, 1: false, length: 2 }), 'detects array like object as array like value');
  t.true(isArrayLike(getArguments(1, 2)), 'detects function arguments as array like value');

  t.false(isArrayLike((a, b) => a + b), 'detects function as not array like value');
  t.false(isArrayLike(new Set([1, 2, 3])), 'detects set as not array like value');
  t.false(isArrayLike({ 0: true, 1: false }), 'detects object without length property as not array like value');
  t.false(isArrayLike({}), 'detects empty object as not array like value');

  t.false(isArrayLike(null), 'detects null as not array like value');
  t.false(isArrayLike(undefined), 'detects undefined as not array like value');
  t.false(isArrayLike(1), 'detects number as not array like value');
  t.false(isArrayLike(true), 'detects boolean as not array like value');
  t.false(isArrayLike(Symbol('nier')), 'detects symbol as not array like value');

  t.end();
});
