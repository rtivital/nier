module.exports = function validateLength(length) {
  return (
    typeof length === 'number'
    && length % 1 === 0
    && length >= 0
    && length <= Number.MAX_SAFE_INTEGER
  );
};
