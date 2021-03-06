const test = require('tape-catch');
const set = require('./set');
const testUtils = require('../../testUtils');

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

test('N.set', (t) => {
  testUtils.isCurried(t, set('who'));

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
