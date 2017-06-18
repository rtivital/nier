const curry = require('../curry/curry');

function has(path, object) {
  return object != null && Object.prototype.hasOwnProperty.call(object, path);
}

module.exports = curry(has, 2);
