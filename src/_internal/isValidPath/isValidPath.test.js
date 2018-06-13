const test = require('tape-catch');
const isValidPath = require('./isValidPath');

test('N._internal/isValidPath', (t) => {
  t.true(isValidPath('hello'), 'string path is valid');
  t.true(isValidPath(['hello', 'nier']), 'array of strings path is valid');
  t.true(isValidPath(0), 'number path is valid');
  t.true(isValidPath([0, 'hello', 1, 'there', 2, 'nier', 3]), 'combined string and number path is valid');

  t.false(isValidPath([]), 'empty array is invalid');
  t.false(isValidPath(null), 'null path is invalid');
  t.false(isValidPath(Symbol('nier')), 'symbol path is invalid');
  t.false(isValidPath(false), 'boolean path is invalid');
  t.false(isValidPath(undefined), 'undefined path is invalid');
  t.false(isValidPath({}), 'object path is invalid');
  t.false(isValidPath(f => f), 'function path is invalid');

  t.end();
});
