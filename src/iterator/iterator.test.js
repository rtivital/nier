const test = require('tape-catch');
const iterator = require('./iterator');

test('iterator', (t) => {
  t.throws(
    () => iterator(),
    'throws if callback function was not provided'
  );

  t.end();
});
