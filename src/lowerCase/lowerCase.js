module.exports = function lowerCase(str) {
  if (typeof str !== 'string') {
    throw new Error('lowerCase received argument that is not string');
  }

  return str.toLowerCase();
};
