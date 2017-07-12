const curry = require('../curry/curry');

function type(value) {
  if (value === null) {
    return 'Null';
  }

  if (value === undefined) {
    return 'Undefined';
  }

  return Object.prototype.toString.call(value).slice(8, -1);
}

module.exports = curry(type);
