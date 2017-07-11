const curry = require('../curry/curry');
const reduce = require('../reduce/reduce');
const has = require('../has/has');

function normalize(prop, data) {
  return reduce((acc, item) => {
    if (has(prop, item)) {
      acc[item[prop]] = item;
    }

    return acc;
  }, {}, data);
}

module.exports = curry(normalize);
