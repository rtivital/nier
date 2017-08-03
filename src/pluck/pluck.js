const curry = require('../curry/curry');
const map = require('../map/map');
const path = require('../path/path');

function pluck(propPath, list) {
  if (!Array.isArray(list)) {
    throw new Error('N.pluck received non array value');
  }

  return map(path(propPath), list);
}

module.exports = curry(pluck);
