const curry = require('../curry/curry');

function find(callback, data) {
  for (let i = 0, l = data.length; i < l; i += 1) {
    const currentItem = data[i];

    if (callback(currentItem)) {
      return currentItem;
    }
  }

  return undefined;
}

module.exports = curry(find);
