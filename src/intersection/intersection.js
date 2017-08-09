const curry = require('../curry/curry');
const includes = require('../includes/includes');

function intersection(a, b) {
  if (!Array.isArray(a)) {
    throw new Error('N.intersection received first argument that is not an array');
  }

  if (!Array.isArray(a)) {
    throw new Error('N.intersection received second argument that is not an array');
  }

  const result = [];

  for (let i = 0, l = a.length; i < l; i += 1) {
    if (includes(a[i], b)) {
      result.push(a[i]);
    }
  }

  return result;
}

module.exports = curry(intersection);
