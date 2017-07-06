const test = require('tape-catch');
const has = require('./has');

const hasHello = has('hello');
const hasHelloPath = has(['hello', 'there']);

test('has', (t) => {
  t.equals(typeof hasHello, 'function', 'returns curried function');
  t.true(hasHello({ hello: 'world' }), 'detects existing path');
  t.false(hasHello({ there: 'you' }), 'detects unexisting path');
  t.true(hasHelloPath({ hello: { there: 'you' } }), 'detects deeply nested existing path');
  t.false(hasHelloPath({ hello: { you: 'there' } }), 'detects deeply nested unexisting path');

  t.end();
});
