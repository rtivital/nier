const test = require('tape-catch');
const assignSignature = require('./assignSignature');
const SIGNATURES = require('../signatures');

const assigned = assignSignature('reversedIterator', true, {});

test.only('_internal/assignSignature', (t) => {
  t.true(
    assigned[SIGNATURES.reversedIterator],
    'assigns signature'
  );

  t.deepEquals(
    Object.keys(assigned),
    [],
    'assigns signature as not emumerable property'
  );

  assigned[SIGNATURES.reversedIterator] = false;
  delete assigned[SIGNATURES.reversedIterator];

  t.true(
    assigned[SIGNATURES.reversedIterator],
    'disables writing or deliting signature'
  );

  t.end();
});
