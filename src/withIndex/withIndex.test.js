const test = require('tape-catch');
const testUtils = require('../../testUtils');
const withIndex = require('./withIndex');

test('withIndex', (t) => {
  testUtils.isCurried(t, withIndex);

  t.end();
});
