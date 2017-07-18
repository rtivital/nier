const curry = require('../curry/curry');


function partial(fn, predefined) {
  if (typeof fn !== 'function') {
    throw new Error('N.partial did not receive function');
  }

  return (...args) => fn(...predefined, ...args);
}

module.exports = curry(partial);
