function areBothEqual(a, b) {
  return a === b
}

function getObjLength(a) {
  return Object.keys(a).length;
}

function type(a) {
  if (typeof a === "undefined") return "undefined";
  if (a === null) return "null";
  if (Number.isNaN(a)) return "NaN";
  return Array.isArray(a) ? "array" : typeof a;
}

function areTypesEqual(a, b) {
  return type(a) === type(b)
}

function areObjectsEqual(a, b) {
  if (getObjLength(a) !== getObjLength(b)) return false;
  for (const key in a) {
    if (!(key in b)) return false;
    if (!isEqual(a[key], b[key])) return false;
  }
  return true
}

function isEqual(a, b) {
  if (!areTypesEqual(a, b)) return false;
  switch (type(a)) {
    case "number": return areBothEqual(a, b);
    case "boolean": return areBothEqual(a, b);
    case "string": return areBothEqual(a, b);
    case "array": return areObjectsEqual(a, b);
    case "object": return areObjectsEqual(a, b);
    case "undefined": return areBothEqual(a, b);
    case "NaN": return true;
    case "null": return areBothEqual(a, b);
  }
}

module.exports = {
  isEqual
}