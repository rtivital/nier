const set = require('../set/set');
const curry = require('../curry/curry');
const has = require('../has/has');
const path = require('../path/path');

function setWith(pathToSet, callback, object) {
  if (has(pathToSet, object)) {
    return set(pathToSet, callback(path(pathToSet, object)), object);
  }

  return set(pathToSet, callback(), object);
}

module.exports = curry(setWith, 3);
