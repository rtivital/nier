const curry = require('../curry/curry');

function unset(path, object) {
  const newObject = Object.assign({}, object);
  delete newObject[path];
  return newObject;
}

module.exports = curry(unset, 2);
