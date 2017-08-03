const curry = require('../curry/curry');
const update = require('../update/update');

function updateWith(index, callback, array) {
  if (typeof callback !== 'function') {
    throw new Error('N.updateWith received callback that is not a function');
  }

  if (!Array.isArray(array)) {
    throw new Error('N.updateWith received data structure that is not an array');
  }

  return update(index, callback(array[index]), array);
}

module.exports = curry(updateWith);
