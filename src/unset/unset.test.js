const test = require('tape-catch');
const unset = require('./unset');

const original = { hello: 'world', hi: 'you' };

test('unset', (t) => {
  t.deepEqual(
    unset('hello', original),
    { hi: 'you' },
    'removes property from object'
  );

  t.end();
});
