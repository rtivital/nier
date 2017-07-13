const curry = require('../curry/curry');

function every(callback, data) {
  for (let i = 0, length = data.length; i < length; i += 1) {
    if (!callback(data[i], i, data)) {
      return false;
    }
  }

  return true;
}

module.exports = curry(every);
