function isOnlyOneArray(first, second) {
  return Array.isArray(first) !== Array.isArray(second);
}

function getObjectLength(first) {
  return Object.keys(first).length;
}

function hasSameLength(first, second) {
  return getObjectLength(first) !== getObjectLength(second);
}

function isEqual(first, second) {
  if (first === second) return true;

  if (typeof first !== "object" || typeof second !== "object") return false;

  if (hasSameLength(first, second)) return false;

  if (isOnlyOneArray(first, second)) return false;

  for (const key in first) {
    if (!(key in second)) return false;
    if (!isEqual(first[key], second[key])) return false;
  }

  return true;
}

module.exports = {
  isEqual
}