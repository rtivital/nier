/* eslint-disable no-new-func */

function arity(length, fn) {
  const params = [];

  for (let i = 0; i < length; i += 1) {
    params.push(`a${i}`);
  }

  const arityFn = new Function(
    'fn',
    `return function arity${length}(${params.join(',')}){return fn.apply(this, arguments);}`
  );

  return arityFn(fn);
}

module.exports = arity;
