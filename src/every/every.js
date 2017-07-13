const curry = require('../curry/curry');

function every(callback, data) {
  for (let i = 0, l = data.length; i < l; i += 1) {
    if (!callback(data[i])) {
      return false;
    }
  }

  return true;
}

module.exports = curry(every);
