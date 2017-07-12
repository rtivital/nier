const curry = require('../curry/curry');

function keys(object) {
  if (object == null) {
    return [];
  }

  return Object.keys(object);
}

module.exports = curry(keys);
