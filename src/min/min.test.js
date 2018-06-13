const test = require('tape-catch');
const min = require('./min');
const testUtils = require('../../testUtils');

test('N.min', (t) => {
  testUtils.isCurried(t, min(2));

  t.equals(min(1, 2), 1, 'finds min number');
  t.equals(min(1, 2), min(2, 1), 'argument order does not mater');
  t.equals(min('a', 'b'), 'a', 'works with strings');

  t.end();
});
