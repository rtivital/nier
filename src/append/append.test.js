const test = require('tape-catch');
const append = require('./append');

const appendValue = append('value');
const original = ['hello', 'world'];

test('append', (t) => {
  t.equal(
    typeof appendValue,
    'function',
    'produces curried function'
  );

  t.deepEqual(
    appendValue(original),
    [...original, 'value'],
    'appends value to array'
  );

  t.deepEqual(
    original,
    ['hello', 'world'],
    'does not mutate original array'
  );

  t.end();
});
