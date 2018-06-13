const test = require('tape-catch');
const testUtils = require('../../testUtils');
const append = require('./append');

test('append', (t) => {
  testUtils.isCurried(t, append('nier'));
  t.throws(() => append('nier', null), 'throws if receives non array or array like value');
  t.deepEquals(append('nier', ['hello', 'world']), ['hello', 'world', 'nier'], 'appends value to array');
  t.deepEquals(
    append('nier', { 0: 'hello', 1: 'world', length: 2 }),
    ['hello', 'world', 'nier'],
    'transforms array like value to array and appends value'
  );

  t.end();
});
