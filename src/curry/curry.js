module.exports = function curry(fn) {
  if (typeof fn !== 'function') {
    throw new Error('curry received argument that is not function');
  }

  const arity = fn.length;

  if (arity === 0) {
    throw new Error('curry received function with zero arity, concider using curryN');
  }
};
