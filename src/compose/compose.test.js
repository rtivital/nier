const test = require('tape-catch');
const compose = require('./compose');

const mutiplyBy2 = value => value * 2;
const add1 = value => value + 1;
const divideBy3 = value => value / 3;
const concat = (str1, str2) => `${str1} ${str2}`;
const upperFirst = str => `${str.charAt(0).toUpperCase()}${str.substring(1)}`;
const upperLast = str => `${str.slice(0, str.length - 1)}${str.slice(str.length - 1).toUpperCase()}`;
const undefinedToZero = value => (typeof value === 'undefined' ? 0 : value);
const getUndefined = () => undefined;

test('compose', (t) => {
  t.throws(
    () => compose(),
    'throws if no arguments were passed'
  );

  t.equals(
    compose(divideBy3, add1, mutiplyBy2)(1),
    divideBy3(add1(mutiplyBy2(1))),
    'works with function that accept single argument'
  );

  t.equals(
    compose(upperLast, upperFirst, concat)('hello', 'there'),
    upperFirst(upperLast(concat('hello', 'there'))),
    'works with function that accept multiple arguments'
  );

  t.equals(
    compose(add1, undefinedToZero, getUndefined)(),
    add1(undefinedToZero(getUndefined())),
    'works with function that return falsy values'
  );

  t.end();
});
