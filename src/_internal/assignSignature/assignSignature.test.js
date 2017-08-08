const test = require('tape-catch');
const assignSignature = require('./assignSignature');
const _SIGNATURES = require('../signatures');

const assigned = assignSignature('reversedIterator', true, {});

test('_internal/assignSignature', (t) => {
  t.true(
    assigned[_SIGNATURES.reversedIterator],
    'assigns signature'
  );

  t.deepEquals(
    Object.keys(assigned),
    [],
    'assigns signature as not emumerable property'
  );

  assigned[_SIGNATURES.reversedIterator] = false;
  delete assigned[_SIGNATURES.reversedIterator];

  t.true(
    assigned[_SIGNATURES.reversedIterator],
    'disables writing or deliting signature'
  );

  t.end();
});
