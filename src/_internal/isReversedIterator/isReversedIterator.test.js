const test = require('tape-catch');
const isReversedIterator = require('./isReversedIterator');
const createReversedIterator = require('../createReversedIterator/createReversedIterator');
const assignSignature = require('../assignSignature/assignSignature');

test('_internal/isReversedIterator', (t) => {
  t.false(
    isReversedIterator(f => f),
    'detects function without reversedIterator internal property'
  );

  t.false(
    isReversedIterator(assignSignature('reversedIterator', false, f => f)),
    'detects function with reversedIterator internal property set to false'
  );

  t.true(
    isReversedIterator(createReversedIterator(f => f)),
    'detects reversed iterator created with createReversedIterator module'
  );

  t.end();
});
