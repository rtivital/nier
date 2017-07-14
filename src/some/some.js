const curry = require('../curry/curry');

function some(callback, data) {
  for (let i = 0, length = data.length; i < length; i += 1) {
    if (callback(data[i])) {
      return true;
    }
  }

  return false;
}

module.exports = curry(some);
