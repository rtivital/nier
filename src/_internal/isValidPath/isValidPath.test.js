const test = require('tape-catch');
const isValidPath = require('./isValidPath');

test('_internal/isValidPath', (t) => {
  t.true(isValidPath('hello'), 'string path is valid');
  t.false(isValidPath(''), 'empty string path is invalid');

  t.true(isValidPath(['hello', 'nier']), 'array of strings path is valid');
  t.false(isValidPath(['', '']), 'array of empty strings is invalid');
  t.false(isValidPath([]), 'empty array is invalid');

  t.false(isValidPath(null), 'null path is invalid');
  t.false(isValidPath(1), 'number path is invalid');
  t.false(isValidPath(Symbol('nier')), 'symbol path is invalid');
  t.false(isValidPath(false), 'boolean path is invalid');
  t.false(isValidPath(undefined), 'undefined path is invalid');
  t.false(isValidPath({}), 'object path is invalid');
  t.false(isValidPath(f => f), 'function path is invalid');

  t.end();
});
