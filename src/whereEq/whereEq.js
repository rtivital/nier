const curry = require('../curry/curry');
const every = require('../every/every');
const equals = require('../equals/equals');

function whereEq(spec, data) {
  const specKeys = Object.keys(spec);
  return every(key => equals(spec[key], data[key]), specKeys);
}

module.exports = curry(whereEq);
