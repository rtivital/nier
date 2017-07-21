const curry = require('../curry/curry');
const keys = require('../keys/keys');
const uniq = require('../uniq/uniq');
const reduce = require('../reduce/reduce');
const has = require('../has/has');


function merge(a, b) {
  const resultKeys = uniq([...keys(a), ...keys(b)]);

  return reduce((acc, key) => {
    const value = has(key, b) ? b[key] : a[key];
    acc[key] = value;
    return acc;
  }, {}, resultKeys);
}

module.exports = curry(merge);
