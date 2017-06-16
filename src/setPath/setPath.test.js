const test = require('tape-catch');
const setPath = require('./setPath');

const original = {
  hello: {
    world: 'you',
  },

  there: 'you',
};

test('setPath', (t) => {
  t.deepEqual(
    setPath(['hello', 'world'], 'there', original),
    { hello: { world: 'there' }, there: 'you' },
    'sets deep nested path'
  );

  t.end();
});
