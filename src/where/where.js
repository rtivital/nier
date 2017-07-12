const curry = require('../curry/curry');
const every = require('../every/every');
const keys = require('../keys/keys');

function where(spec, data) {
  const specKeys = keys(spec);
  return every((key) => {
    if (typeof spec[key] === 'function') {
      return spec[key](data[key]);
    }

    return false;
  }, specKeys);
}

module.exports = curry(where);
