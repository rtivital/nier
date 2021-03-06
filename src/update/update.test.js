const test = require('tape-catch');
const update = require('./update');
const testUtils = require('../../testUtils');

test('N.update', (t) => {
  testUtils.isCurried(t, update(1));

  t.throws(() => update(1, 'hello', 'nier'), 'throws if receives non array like value');

  t.deepEquals(
    update(1, 'hello', ['you', 'hi', 'there']),
    ['you', 'hello', 'there'],
    'updates value at provided index'
  );

  t.deepEquals(update(10, 'hello', [1, 2]), [1, 2], 'does not update array if value does not exist');
  t.deepEquals(update(-1, 'hello', [1, 2, 3]), [1, 2, 'hello'], 'updates value with negative index');

  t.end();
});
