const test = require('tape-catch');
const has = require('./has');

const hasHello = has('hello');
const hasHelloPath = has(['hello', 'there']);

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

  t.equals(
    hasHelloPath({ hello: { there: 'you' } }),
    true,
    'detects deeply nested existing path'
  );

  t.equals(
    hasHelloPath({ hello: { you: 'there' } }),
    false,
    'detects deeply nested unexisting path'
  );

  t.end();
});
