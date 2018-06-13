const test = require('tape-catch');
const chunk = require('./chunk');
const testUtils = require('../../testUtils');

test('N.chunk', (t) => {
  testUtils.isCurried(t, chunk(2));

  t.throws(() => chunk(2, null), 'throws if provided chunk data is not array like type');
  t.throws(() => chunk('hello', [1, 2, 3]), 'throws if provided size value is not a valid integer');
  t.deepEquals(chunk(2, 'hello'), [['h', 'e'], ['l', 'l'], ['o']], 'splits string into chunks');

  t.deepEquals(
    chunk(1, { 0: 'hello', 1: 'world', length: 2 }),
    [['hello'], ['world']],
    'splits array like object into chunks'
  );

  t.deepEquals(chunk(2, [1, 2, 3, 4, 5]), [[1, 2], [3, 4], [5]], 'splits array into chunks');

  t.end();
});
