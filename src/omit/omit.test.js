const test = require('tape-catch');
const testUtils = require('../../testUtils');
const omit = require('./omit');

test('omit', (t) => {
  testUtils.isCurried(t, omit(['a', 'b']));

  t.deepEquals(omit(['a', 'b'], { a: 1, b: 2, c: 3 }), { c: 3 }, 'removes specified keys from object');
  t.deepEquals(omit(['a', 'd'], { a: 1, b: 2 }), { b: 2 }, 'removes only keys that exist in object');

  t.end();
});
