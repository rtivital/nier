const curry = require('../curry/curry');

function set(path, value, object) {
  return Object.assign({}, object, { [path]: value });
}

module.exports = curry(set, 3);
