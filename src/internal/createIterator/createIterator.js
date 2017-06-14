module.exports = function createIterator(method, iterator) {
  return function iterable(fn, withIndex, data) {
    if (typeof fn !== 'function') {
      throw new Error(`${method} received callback that is not function`);
    }

    const finalData = Array.isArray(withIndex) ? withIndex : data;

    const filterFn = withIndex
      ? (value, index) => fn(value, index)
      : value => fn(value);

    if (finalData) {
      return iterator(filterFn, data);
    }

    return curriedData => iterator(filterFn, curriedData);
  };
};
