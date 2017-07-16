/* eslint-disable no-new-func */

module.exports = function arity(length, fn) {
  switch (length) {
    case 1: return (a1, ...rest) => fn(a1, ...rest);
    case 2: return (a1, a2, ...rest) => fn(a1, a2, ...rest);
    case 3: return (a1, a2, a3, ...rest) => fn(a1, a2, a3, ...rest);
    case 4: return (a1, a2, a3, a4, ...rest) => fn(a1, a2, a3, a4, ...rest);
    case 5: return (a1, a2, a3, a4, a5, ...rest) => fn(a1, a2, a3, a4, a5, ...rest);
    default: return (...rest) => fn(...rest);
  }
};
