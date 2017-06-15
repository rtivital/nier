const test = require('tape-catch');
const chunk = require('./chunk');

test('chunk', (t) => {
  t.throws(
    () => chunk('hello', [1, 2, 3]),
    'throws if provided chunk size value has incorrect type'
  );

  t.throws(
    () => chunk(2, null),
    'throws if provided chunk data is not array like type'
  );

  t.deepEqual(
    chunk(2, [1, 2, 3, 4, 5]),
    [[1, 2], [3, 4], [5]],
    'splits array into chunks'
  );

  t.end();
});
