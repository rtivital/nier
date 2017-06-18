const test = require('tape-catch');
const unset = require('./unset');

const testObject = {
  testing: {
    makes: {
      you: {
        feel: 'protected',
      },
    },
  },

  nope: true,
};

const unsetFeel = unset(['testing', 'makes', 'you', 'feel']);
const unsetUnexistingPath = unset(['testing', 'is', 'ad']);

test('unset', (t) => {
  t.throws(
    () => unset(0, testObject),
    'throws if provided path is not array or string'
  );

  t.equal(
    typeof unsetFeel,
    'function',
    'is curried'
  );

  t.deepEqual(
    unsetFeel(testObject),
    {
      testing: {
        makes: {
          you: {},
        },
      },

      nope: true,
    },
    'deletes deeply nested path from object'
  );

  t.deepEqual(
    unsetUnexistingPath(testObject),
    testObject,
    'returns initial object if provided object does not have path'
  );

  t.end();
});
