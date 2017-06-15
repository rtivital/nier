module.exports = function trim(str) {
  if (typeof str !== 'string') {
    throw new Error('trim received argument that is not string');
  }

  return str.trim();
};
