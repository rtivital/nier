const curry = require('../curry/curry');
const equals = require('../equals/equals');
const some = require('../some/some');

function includes(value, list) {
  if (!Array.isArray(list)) {
    return false;
  }

  return some(equals(value), list);
}

module.exports = curry(includes);
