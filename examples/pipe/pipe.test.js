const test = require('tape');
const pipe = require('./pipe');

const mutiplyBy2 = value => value * 2;
const add1 = value => value + 1;
const divideBy3 = value => value / 3;

const pipeSingleArgument = pipe(
  mutiplyBy2, // вызывается первой
  add1, // вызывается второй
  divideBy3 // вызывается последней
); // эквивалентно –> (value) => mutiplyBy2(add1(divideBy3(value)))

const concat = (str1, str2) => `${str1} ${str2}`;
const upperFirst = str => `${str.charAt(0).toUpperCase()}${str.substring(1)}`;
const upperLast = str => `${str.slice(0, str.length - 1)}${str.slice(str.length - 1).toUpperCase()}`;

const pipedDoubleArgument = pipe(
  concat, // вызывается первой
  upperFirst, // вызывается второй
  upperLast // вызывается последней
); // эквивалентно –> (value) => concat(upperFirst(upperLast(value)))

test('pipe', (t) => {
  // функция pipe должна вернуть ошибку,
  // если ей не было передано ни одного аргумента
  t.throws(
    () => pipe(),
    'throws error if argument is not passed'
  );

  // функция, созданная с помощью pipe должна работать с функциями,
  // принимающими один аргумент
  t.equals(
    pipeSingleArgument(1),
    1,
    'works with single argument functions'
  );

  // функция, созданная с помощью pipe должна работать с функциями,
  // принимающими более одного аргумента
  t.equals(pipedDoubleArgument('hello', 'there'), 'Hello therE', 'workds with functions that accept multiple arguments');

  t.end();
});
