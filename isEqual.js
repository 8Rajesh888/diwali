function areBothEqual(a, b) {
  return a === b;
}

function getObjLength(a) {
  return Object.keys(a).length;
}

function getType(a) {
  // if (typeof a === "undefined") return "undefined";
  if (a === null) return "null";
  if (Number.isNaN(a)) return "NaN";
  return Array.isArray(a) ? "array" : typeof a;
}

function areTypesEqual(a, b) {
  return getType(a) === getType(b);
}

function areObjectsEqual(a, b) {
  if (getObjLength(a) !== getObjLength(b)) return false;
  for (const key in a) {
    if (!(key in b)) return false;
    if (!isEqual(a[key], b[key])) return false;
  }
  return true;
}

function isEqual(a, b) {
  if (!areTypesEqual(a, b)) return false;
  switch (getType(a)) {
    case "array":
      return areObjectsEqual(a, b);
    case "object":
      return areObjectsEqual(a, b);
    case "NaN":
      return true;
  }
  return areBothEqual(a, b);
}

module.exports = {
  isEqual,
};
