module.exports = function createIterator(method, iterator) {
  return function iterable(fn, withIndex = false, data) {
    if (typeof fn !== 'function') {
      throw new Error(`${method} received callback that is not function`);
    }

    const shorthand = Array.isArray(withIndex);
    const finalData = shorthand ? withIndex : data;

    const filterFn = !shorthand && withIndex
      ? (value, index) => fn(value, index)
      : value => fn(value);

    if (finalData) {
      return iterator(filterFn, finalData);
    }

    return curriedData => iterator(filterFn, curriedData);
  };
};
