const test = require('tape-catch');
const testUtils = require('../../testUtils');
const prepend = require('./prepend');

test('prepend', (t) => {
  testUtils.isCurried(t, prepend('value'));

  t.throws(
    () => prepend('value', null),
    'throws if receives data structure that is not array or array like'
  );

  t.deepEquals(
    prepend('value', ['hello']),
    ['value', 'hello'],
    'prepends value to array'
  );

  t.deepEquals(
    prepend('nier', { 0: 'hello', 1: 'world', length: 2 }),
    ['nier', 'hello', 'world'],
    'transforms array like value to array and prepends value'
  );

  t.end();
});
