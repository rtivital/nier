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

const unsetTesting = unset('testing');
const unsetUnexistingKey = unset('hello');
const unsetFeel = unset(['testing', 'makes', 'you', 'feel']);
const unsetUnexistingPath = unset(['testing', 'is', 'ad']);

test('unset', (t) => {
  t.throws(
    () => unset(0, testObject),
    'throws if provided path is not array or string'
  );

  t.equals(
    typeof unsetFeel,
    'function',
    'is curried'
  );

  t.deepEquals(
    unsetTesting(testObject),
    { nope: true },
    'unsets path with string'
  );

  t.deepEquals(
    unsetUnexistingKey(testObject),
    testObject,
    'returns initial object if key was not found in object'
  );

  t.deepEquals(
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

  t.deepEquals(
    unsetUnexistingPath(testObject),
    testObject,
    'returns initial object if provided object does not have path'
  );

  t.end();
});
