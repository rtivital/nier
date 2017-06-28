const keys = require('../keys/keys');

module.exports = function values(object) {
  const objectKeys = keys(object);
  const result = [];

  for (let i = 0, l = objectKeys.length; i < l; i += 1) {
    result.push(object[objectKeys[i]]);
  }

  return result;
};
