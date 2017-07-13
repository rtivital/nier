const test = require('tape-catch');
const concat = require('./concat');
const isCurried = require('../../testUtils/isCurried');

test('concat', (t) => {
  isCurried(t, concat([1, 2, 3]));

  t.throws(
    () => concat(1, 2),
    'throws if receives values that can not be concated'
  );

  t.deepEquals(
    concat([1, 2], [3, 4]),
    [1, 2, 3, 4],
    'concats two arrays'
  );

  t.equals(
    concat('hello, ', 'nier'),
    'hello, nier',
    'concats two strings'
  );

  t.deepEquals(
    concat(['hello'], 'nier'),
    ['hello', 'n', 'i', 'e', 'r'],
    'concats string with array'
  );

  t.deepEquals(
    concat({ 0: 'hello', length: 1 }, { 0: 'nier', length: 1 }),
    ['hello', 'nier'],
    'concats two array like values'
  );

  t.end();
});
