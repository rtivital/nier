const test = require('tape-catch');
const has = require('./has');

const hasHello = has('hello');

test('has', (t) => {
  t.equals(
    typeof hasHello,
    'function',
    'returns curried function'
  );

  t.equals(
    hasHello({ hello: 'world' }),
    true,
    'detects existing path'
  );

  t.equals(
    hasHello({ there: 'you' }),
    false,
    'detects unexisting path'
  );

  t.end();
});
