const curry = require('../curry/curry');
const reduce = require('../reduce/reduce');
const keys = require('../keys/keys');
const includes = require('../includes/includes');

function omit(remove, object) {
  return reduce((acc, key) => {
    if (!includes(object[key], remove)) {
      acc[key] = object[key];
    }

    return acc;
  }, {}, keys(object));
}

module.exports = curry(omit);
