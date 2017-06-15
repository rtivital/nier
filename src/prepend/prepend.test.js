const test = require('tape-catch');
const prepend = require('./prepend');

const prependValue = prepend('value');
const original = ['hello', 'world'];

test('prepend', (t) => {
  t.equal(
    typeof prependValue,
    'function',
    'produces curried function'
  );

  t.deepEqual(
    prependValue(original),
    ['value', ...original],
    'prepends value to array'
  );

  t.deepEqual(
    original,
    ['hello', 'world'],
    'does not mutate original array'
  );

  t.end();
});
