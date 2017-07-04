module.exports = function flatten(array) {
  const result = [];

  for (let i = 0, l = array.length; i < l; i += 1) {
    if (Array.isArray(array[i])) {
      result.push(...array[i]);
    } else {
      result.push(array[i]);
    }
  }

  return result;
};
