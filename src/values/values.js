const keys = require('../keys/keys');
const curry = require('../curry/curry');

function values(object) {
  const objectKeys = keys(object);
  const result = [];

  for (let i = 0, l = objectKeys.length; i < l; i += 1) {
    result.push(object[objectKeys[i]]);
  }

  return result;
}

module.exports = curry(values);
