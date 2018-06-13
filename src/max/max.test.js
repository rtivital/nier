const test = require('tape-catch');
const max = require('./max');
const testUtils = require('../../testUtils');

test('N.max', (t) => {
  testUtils.isCurried(t, max(2));

  t.equals(max(1, 2), 2, 'finds max number');
  t.equals(max(1, 2), max(2, 1), 'argument order does not mater');
  t.equals(max('a', 'b'), 'b', 'works with strings');

  t.end();
});
