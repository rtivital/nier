const curry = require('../curry/curry');
const reduce = require('../reduce/reduce');
const has = require('../has/has');

function pick(keys, object) {
  return reduce((acc, key) => {
    if (has(key, object)) {
      acc[key] = object[key];
    }

    return acc;
  }, {}, keys);
}

module.exports = curry(pick);
