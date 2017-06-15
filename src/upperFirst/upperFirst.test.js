const test = require('tape-catch');
const upperFirst = require('./upperFirst');

test('upperFirst', (t) => {
  t.throws(
    () => upperFirst(),
    'throws error if receives non string param'
  );

  t.equal(
    upperFirst('hello'),
    'Hello',
    'converts first letter to upperCase'
  );

  t.end();
});
