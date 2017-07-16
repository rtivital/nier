const curryN = require('../curryN/curryN');

function curry(fn) {
  return curryN(fn.length, fn);
}

module.exports = curryN(1, curry);
