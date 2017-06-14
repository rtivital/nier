module.exports = function iterator(iteratorFn, methodName) {
  if (typeof iteratorFn !== 'function') {
    throw new Error('iterator received callback that is not function');
  }

  const name = methodName || iteratorFn.name || 'iterator callback';

  return function iterable(fn, withIndex = false, data) {
    if (typeof fn !== 'function') {
      throw new Error(`${name} received callback that is not function`);
    }

    const shorthand = Array.isArray(withIndex);
    const finalData = shorthand ? withIndex : data;
    const iterableFn = !shorthand && withIndex
      ? (value, index) => fn(value, index)
      : value => fn(value);

    if (finalData) {
      return iteratorFn(iterableFn, finalData);
    }

    return curriedData => iteratorFn(iterableFn, curriedData);
  };
};
