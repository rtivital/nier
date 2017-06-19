const test = require('tape-catch');
const path = require('./path');

const testOject = {
  here: {
    goes: {
      a: {
        deeply: {
          nested: 'prop',
        },
      },
    },
  },

  notNested: 'i am not so nested',
};

test('path', (t) => {
  t.equals(
    path(['here', 'goes', 'a', 'deeply', 'nested'], testOject),
    testOject.here.goes.a.deeply.nested,
    'gets deeply nested prop with array path'
  );

  t.equals(
    path('notNested', testOject),
    testOject.notNested,
    'gets not nested prop with string path'
  );

  t.equals(
    path('hello', testOject),
    undefined,
    'returns undefined if string path was not found'
  );

  t.equals(
    path(['hello', 'there'], testOject),
    undefined,
    'returns undefined if array path was not found'
  );

  t.end();
});
