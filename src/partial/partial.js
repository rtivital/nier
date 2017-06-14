module.exports = function partial(fn, ...predefined) {
  if (typeof fn !== 'function') {
    throw new Error('partial received first argument that is not a function');
  }

  return (...args) => fn(...predefined, ...args);
};
