const test = require('tape-catch');
const reverse = require('./reverse');

test.only('reverse', (t) => {
  t.equals(
    typeof reverse(),
    'function',
    'is curried'
  );

  t.throws(
    () => reverse(1),
    'throws if receives a value that is not array or array like'
  );

  t.deepEquals(
    reverse([1, 2, 3]),
    [3, 2, 1],
    'reverses an array'
  );

  t.deepEquals(
    reverse({ 0: 'hello', 1: 'nier', length: 2 }),
    ['nier', 'hello'],
    'reverses array like object'
  );

  t.deepEquals(
    reverse('nier'),
    'rein',
    'reverses string values'
  );

  t.end();
});
