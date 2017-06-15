const test = require('tape-catch');
const chunk = require('./chunk');

test('chunk', (t) => {
  t.deepEqual(
    chunk(2, [1, 2, 3, 4, 5]),
    [[1, 2], [3, 4], [5]],
    'splits array into chunks'
  );

  t.end();
});
