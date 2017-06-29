const test = require('tape-catch');
const flatten = require('./flatten');

test('flatten', (t) => {
  t.deepEquals(
    flatten([[1], [2], [3], 4]),
    [1, 2, 3, 4],
    'flattens array with single level nesting'
  );

  t.deepEquals(
    flatten([1, 2, 3, 4]),
    [1, 2, 3, 4],
    'does not change an array if flatten is not required'
  );

  t.deepEquals(
    flatten([1, 2, 3, [[4]]]),
    [1, 2, 3, [4]],
    'removes only single level of nesting'
  );


  t.end();
});
