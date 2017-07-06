const test = require('tape-catch');
const uniq = require('./uniq');

test('uniq', (t) => {
  t.deepEquals(
    uniq([1, 1, 1, 2, 2, 4]),
    [1, 2, 4],
    'filters non unique elements'
  );
  t.end();
});
