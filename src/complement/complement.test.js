const test = require('tape-catch');
const complement = require('./complement');

const getFalse = () => false;
const getTrue = () => true;
const getStringFromParams = value => `${value}`;

test('complement', (t) => {
  t.throws(() => complement(), 'throws if received argument is not function');
  t.equals(complement(getFalse)(), true, 'complements falsy values');
  t.equals(complement(getTrue)(), false, 'complements truthy values');
  t.equals(complement(getStringFromParams)('hello'), false, 'complements functions with params');

  t.end();
});
