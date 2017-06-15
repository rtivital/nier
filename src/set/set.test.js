const test = require('tape-catch');
const set = require('./set');

const original = { hello: 'there', hi: 'you' };

test('set', (t) => {
  t.deepEqual(
    set('hello', 'world', original),
    { hello: 'world', hi: 'you' },
    'sets value to object'
  );

  t.end();
});
