const test = require('tape-catch');
const testUtils = require('../../testUtils');
const join = require('./join');

test('join', (t) => {
  testUtils.isCurried(t, join('|'));
  t.throws(() => join('|', 0), 'throws id receives non array value');
  t.equals(join('|', [1, 2, 3]), '1|2|3', 'joins array with separator');

  t.end();
});
