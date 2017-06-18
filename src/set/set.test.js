const test = require('tape-catch');
const set = require('./set');

const whoIsAwesome = Object.freeze({
  who: 'you',
  are: 'are',
  awesome: 'awesome',
});

const setWho = set('who');
const setNot = set('not');

test('set', (t) => {
  t.equal(typeof setWho, 'function', 'is curried');

  t.deepEqual(
    setWho('they', whoIsAwesome),
    {
      who: 'they',
      are: 'are',
      awesome: 'awesome',
    },
    'sets value that aready exists in the object'
  );

  t.deepEqual(
    setNot('not', whoIsAwesome),
    {
      who: 'you',
      are: 'are',
      not: 'not',
      awesome: 'awesome',
    },
    'adds value to the object that was not there'
  );

  t.end();
});
