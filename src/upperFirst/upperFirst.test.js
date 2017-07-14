const test = require('tape-catch');
const upperFirst = require('./upperFirst');
const testUtils = require('../../testUtils');

test('upperFirst', (t) => {
  testUtils.isCurried(t, upperFirst());

  t.throws(
    () => upperFirst(1),
    'throws error if receives non string param'
  );

  t.equals(
    upperFirst('hello'),
    'Hello',
    'converts first letter to upperCase'
  );

  t.end();
});
