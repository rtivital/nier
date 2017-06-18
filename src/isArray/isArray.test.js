const test = require('tape-catch');
const isArray = require('./isArray');

test('isArray', (t) => {
  t.equals(isArray([]), true, 'detecs an array');
  t.equals(isArray('hello'), false, 'detes value that is not an array');

  t.end();
});
