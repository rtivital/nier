const curry = require('../curry/curry');
const reduce = require('../reduce/reduce');

function normalize(prop, data) {
  return reduce((acc, item) => {
    acc[item[prop]] = item;
    return acc;
  }, {}, data);
}

module.exports = curry(normalize);
