const test = require('tape-catch');
const set = require('./set');

const whoIsAwesome = {
  who: 'you',
  are: 'are',
  awesome: 'awesome',
  signs: {
    exclamation: '!',
    question: '?',
  },
};

const setWho = set('who');
const setNot = set('not');
const doubleExclamation = set(['signs', 'exclamation'], '!!');
const setComma = set(['signs', 'comma'], ',');

test('set', (t) => {
  t.throws(
    () => set(0, 'hello', 'there'),
    'throws error if provided value is not array or string'
  );

  t.equals(typeof setWho, 'function', 'is curried');

  t.deepEquals(
    setWho('they', whoIsAwesome),
    {
      who: 'they',
      are: 'are',
      awesome: 'awesome',
      signs: {
        exclamation: '!',
        question: '?',
      },
    },
    'sets value that aready exists in the object'
  );

  t.deepEquals(
    setNot('not', whoIsAwesome),
    {
      who: 'you',
      are: 'are',
      not: 'not',
      awesome: 'awesome',
      signs: {
        exclamation: '!',
        question: '?',
      },
    },
    'adds value to the object that was not there'
  );

  t.deepEquals(
    doubleExclamation(whoIsAwesome),
    {
      who: 'you',
      are: 'are',
      awesome: 'awesome',
      signs: {
        exclamation: '!!',
        question: '?',
      },
    },
    'sets deeply nested property that already exists in the object'
  );

  t.deepEquals(
    setComma(whoIsAwesome),
    {
      who: 'you',
      are: 'are',
      awesome: 'awesome',
      signs: {
        exclamation: '!',
        question: '?',
        comma: ',',
      },
    },
    'sets deeply nested property that did not exist in the object'
  );

  t.deepEquals(
    whoIsAwesome,
    {
      who: 'you',
      are: 'are',
      awesome: 'awesome',
      signs: {
        exclamation: '!',
        question: '?',
      },
    },
    'does not mutate original object'
  );

  t.end();
});
