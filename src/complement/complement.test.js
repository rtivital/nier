const test = require('tape-catch');
const complement = require('./complement');
const testUtils = require('../../testUtils');

test('N.complement', (t) => {
  testUtils.isCurried(t, complement());
  t.throws(() => complement(1), 'throws if received argument is not function');
  t.true(complement(() => false)(), 'complements falsy values');
  t.false(complement(() => true)(), 'complements truthy values');
  t.false(complement(name => `Hello, ${name}!`)('N'), 'complements functions with params');

  t.end();
});
