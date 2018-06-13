const test = require('tape-catch');
const find = require('./find');
const testUtils = require('../../testUtils');

test('N.find', (t) => {
  testUtils.isCurried(t, find(val => val === 2));
  testUtils.noIndex(t, { fn: find, data: [1, 2, 3], result: 1 });
  testUtils.withIndex(t, { fn: find, data: [1, 2], indexResult: 2, dataResult: 1 });

  t.equals(find(val => val > 2, [1, 2, 3, 4, 5]), 3, 'finds first maching value');
  t.equals(find(val => val > 2, [1, 1, 1]), undefined, 'returns undefined if none of the values mached');

  t.end();
});
