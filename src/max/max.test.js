const test = require('tape-catch');
const max = require('./max');

test('max', (t) => {
  t.equals(typeof max(2), 'function', 'is curried');
  t.equals(max(1, 2), 2, 'finds max number');
  t.equals(max(1, 2), max(2, 1), 'argument order does not mater');
  t.equals(max('a', 'b'), 'b', 'works with strings');

  t.end();
});
