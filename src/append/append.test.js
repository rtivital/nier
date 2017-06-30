const test = require('tape-catch');
const append = require('./append');

const appendValue = append('value');
const original = ['hello', 'world'];
const arrayLike = { 0: 'hello', 1: 'world', length: 2 };

test('append', (t) => {
  t.equal(typeof appendValue, 'function', 'is curried');
  t.throws(() => appendValue(null), 'throws if receives non array or array like value');

  t.deepEqual(
    appendValue(original),
    ['hello', 'world', 'value'],
    'appends value to array'
  );

  t.deepEqual(
    original,
    ['hello', 'world'],
    'does not mutate original array'
  );

  t.deepEqual(
    appendValue(arrayLike),
    ['hello', 'world', 'value'],
    'appends value to array like'
  );

  t.deepEqual(
    appendValue('hi'),
    ['h', 'i', 'value'],
    'transforms provided array like value to array'
  );

  t.end();
});
