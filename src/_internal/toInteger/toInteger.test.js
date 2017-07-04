const test = require('tape-catch');
const toInteger = require('./toInteger');

test('toInteger', (t) => {
  t.equals(toInteger(2.33), 2, 'converts float to integer');
  t.equals(toInteger('1'), 1, 'converts string to integer');
  t.equals(toInteger('nier'), 0, 'returns zero if unable to parse provided value');

  t.end();
});
