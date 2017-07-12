const test = require('tape-catch');
const complement = require('./complement');

test('complement', (t) => {
  t.throws(
    () => complement(1),
    'throws if received argument is not function'
  );

  t.equals(
    typeof complement(),
    'function',
    'is curried'
  );

  t.true(
    complement(() => false)(),
    'complements falsy values'
  );

  t.false(
    complement(() => true)(),
    'complements truthy values'
  );

  t.false(
    complement(name => `Hello, ${name}!`)('N'),
    'complements functions with params'
  );

  t.end();
});
