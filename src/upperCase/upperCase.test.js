const test = require('tape-catch');
const upperCase = require('./upperCase');

test('upperCase', (t) => {
  t.throws(
    () => upperCase(),
    'throws error if receives non string param'
  );

  t.equals(
    upperCase('hello'),
    'HELLO',
    'converts all charachters to upperCase'
  );

  t.end();
});
