module.exports = function isValidPath(path) {
  const pathType = typeof path;

  if (pathType === 'string' || pathType === 'number') {
    return true;
  }

  if (Array.isArray(path)) {
    const length = path.length;

    if (length === 0) {
      return false;
    }

    for (let i = 0; i < length; i += 1) {
      const elementType = typeof path[i];

      if (elementType !== 'string' && elementType !== 'number') {
        return false;
      }
    }

    return true;
  }

  return false;
};
