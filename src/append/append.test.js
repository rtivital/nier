const test = require('tape-catch');
const append = require('./append');

test('append', (t) => {
  t.equal(
    typeof append('nier'),
    'function',
    'is curried'
  );

  t.throws(
    () => append('nier', null),
    'throws if receives non array or array like value'
  );

  t.deepEqual(
    append('nier', ['hello', 'world']),
    ['hello', 'world', 'nier'],
    'appends value to array'
  );

  t.deepEqual(
    append('nier', { 0: 'hello', 1: 'world', length: 2 }),
    ['hello', 'world', 'nier'],
    'transforms array like value to array and appends value'
  );

  t.end();
});
