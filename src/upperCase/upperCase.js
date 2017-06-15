module.exports = function upperCase(str) {
  if (typeof str !== 'string') {
    throw new Error('upperCase received argument that is not string');
  }

  return str.toUpperCase();
};
