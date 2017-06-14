const test = require('tape');
const flip = require('./flip');

const getZero = () => 0;
const greet = name => `Hello, ${name}`;
const concat = (str1, str2) => `${str1} ${str2}`;
const concat3 = (str1, str2, str3) => `${str1} ${str2} ${str3}`;

test('flip', (t) => {
  t.equal(
    flip(getZero)(),
    getZero(),
    'does not change the behavior of function with no arguments'
  );

  t.equal(
    flip(greet)('John'),
    greet('John'),
    'does not change the behavior of function with single argument'
  );

  t.equal(
    flip(concat)('world', 'hello'),
    concat('hello', 'world'),
    'flips function with two arguments'
  );

  t.equal(
    flip(concat3)('!', 'world', 'hello'),
    concat3('hello', 'world', '!'),
    'flips function with three arguments'
  );

  t.end();
});
