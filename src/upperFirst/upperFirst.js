module.exports = function upperFirst(str) {
  if (typeof str !== 'string') {
    throw new Error('upperFirst received argument that is not string');
  }

  return str.charAt(0).toUpperCase() + str.substring(1);
};
