const test = require('tape');
const complement = require('./complement');

const getFalse = () => false;
const getTrue = () => true;
const getStringFromParams = value => `${value}`;

test('complement', (t) => {
  t.throws(() => complement(), 'throws if received argument is not function');
  t.equal(complement(getFalse)(), true, 'complements falsy values');
  t.equal(complement(getTrue)(), false, 'complements truthy values');
  t.equal(complement(getStringFromParams)('hello'), false, 'complements functions with params');

  t.end();
});
