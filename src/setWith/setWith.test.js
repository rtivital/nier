const test = require('tape-catch');
const setWith = require('./setWith');

const testObject = {
  deeply: {
    nested: true,
  },

  notDeeply: 'nested',
};

test('N.setWith', (t) => {
  t.deepEquals(
    setWith('notDeeply', value => `i am not ${value}`, testObject),
    {
      deeply: {
        nested: true,
      },

      notDeeply: 'i am not nested',
    },
    'updates not nested value with provided callback based on existing value'
  );

  t.deepEquals(
    setWith(['deeply', 'nested'], value => value.toString(), testObject),
    {
      deeply: {
        nested: 'true',
      },

      notDeeply: 'nested',
    },
    'updated deeply nested prop with provided callback based on existing value'
  );

  t.deepEquals(
    setWith(['deeply', 'notSoNested'], value => typeof value === 'undefined', testObject),
    {
      deeply: {
        nested: true,
        notSoNested: true,
      },

      notDeeply: 'nested',
    },
    'provies undefined as value if value does not exist'
  );

  t.end();
});
