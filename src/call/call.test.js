const test = require('tape-catch');
const call = require('./call');

test('call', (t) => {
  t.equals(
    typeof call(f => f),
    'function',
    'is curried'
  );

  t.equals(
    call(f => f, 1),
    1,
    'provides single argument to callback function'
  );

  t.equals(
    call((a, b) => a + b)(2, 45),
    47,
    'provides multiple arguments to callback function'
  );

  t.end();
});
