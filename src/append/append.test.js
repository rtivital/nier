const test = require('tape-catch');
const testUtils = require('../../testUtils');
const ArgumentError = require('../_internal/ArgumentError/ArgumentError');
const append = require('./append');

test('N.append', (t) => {
  testUtils.isCurried(t, append('nier'));

  t.throws(() => append('nier', null), ArgumentError, 'validates second argument');
  t.deepEquals(append('nier', ['hello', 'world']), ['hello', 'world', 'nier'], 'appends value to array');

  t.end();
});
