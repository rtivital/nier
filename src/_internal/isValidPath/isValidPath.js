function isValidStringPath(path) {
  return path.length > 0;
}

module.exports = function isValidPath(path) {
  if (typeof path === 'string') {
    return isValidStringPath(path);
  }

  if (Array.isArray(path)) {
    const length = path.length;

    if (length === 0) {
      return false;
    }

    for (let i = 0; i < length; i += 1) {
      if (typeof path[i] !== 'string') {
        return false;
      }

      if (!isValidStringPath(path[i])) {
        return false;
      }
    }

    return true;
  }

  return false;
};
