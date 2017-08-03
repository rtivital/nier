const curry = require('../curry/curry');
const update = require('../update/update');

function updateWith(index, callback, array) {
  if (typeof callback !== 'function') {
    throw new Error('N.updateWith received callback that is not a function');
  }

  if (!Array.isArray(array)) {
    throw new Error('N.updateWith received data structure that is not an array');
  }

  const { length } = array;
  const indexToUpdate = index < 0 ? length + index : index;

  return update(index, callback(array[indexToUpdate]), array);
}

module.exports = curry(updateWith);
