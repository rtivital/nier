const test = require('tape-catch');
const min = require('./min');

test('min', (t) => {
  t.equals(typeof min(2), 'function', 'is curried');
  t.equals(min(1, 2), 1, 'finds min number');
  t.equals(min(1, 2), min(2, 1), 'argument order does not mater');
  t.equals(min('a', 'b'), 'a', 'works with strings');

  t.end();
});
