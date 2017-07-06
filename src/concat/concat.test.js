const test = require('tape-catch');
const concat = require('./concat');

test('concat', (t) => {
  t.equals(typeof concat([1, 2, 3]), 'function', 'is curried');

  t.deepEquals(concat([1, 2], [3, 4]), [1, 2, 3, 4], 'concats two arrays');

  t.end();
});
