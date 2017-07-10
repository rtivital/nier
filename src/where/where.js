const curry = require('../curry/curry');
const every = require('../every/every');

function where(spec, data) {
  const specKeys = Object.keys(spec);
  return every((key) => {
    if (typeof spec[key] === 'function') {
      return spec[key](data[key]);
    }

    return false;
  }, specKeys);
}

module.exports = curry(where);
