function isNumber(something) {
  return typeof something === 'number';
}

function isString(something) {
  return typeof something === 'string';
}

function isBoolean(something) {
  return typeof something === 'boolean';
}

function sum(a, b) {
  return a + b;
}

module.exports = {
  isNumber,
  isString,
  isBoolean,
  sum
}
