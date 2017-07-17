const curry = require('../curry/curry');

function none(callback, list) {
  for (let i = 0, l = list.length; i < l; i += 1) {
    if (callback(list[i])) {
      return false;
    }
  }

  return true;
}

module.exports = curry(none);
