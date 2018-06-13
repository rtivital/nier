const test = require('tape-catch');
const head = require('./head');
const testUtils = require('../../testUtils');

test('head', (t) => {
  testUtils.isCurried(t, head());

  t.equals(head([1, 2, 3]), 1, 'returns first element of array');
  t.equals(head('nier'), 'n', 'returns first charachter of string');
  t.equals(head({ 0: 'hello', 1: 'nier', length: 2 }), 'hello', 'returns first element of array like object');
  t.equals(head([]), undefined, 'returns undefined if array does not have first element');
  t.equals(head(''), undefined, 'returns undefined if string does not have first element');
  t.equals(head(null), undefined, 'returns undefined if value is not array like');

  t.end();
});
