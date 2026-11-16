function isObject(val) {
  return typeof val === "object" && val !== null && !Array.isArray(val);
}

function merge(obj1, obj2) {
  const merged = { ...obj1 };

  for (const key in obj2) {
    const sourceVal = obj2[key];
    const targetVal = merged[key];

    const isSourceObject = isObject(sourceVal);
    const isTargetObject = isObject(targetVal);

    if (isSourceObject && isTargetObject) {
      merged[key] = merge(targetVal, sourceVal);
    } else {
      merged[key] = sourceVal;
    }
  }

  return merged;
}

const target = { a: 1, b: { x: 10 } };
const source = { b: { y: 20 }, c: 3 };

console.log(merge(target, source));
