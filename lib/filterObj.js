export function filter(fn, obj) {
  let result = {};

  Object.keys(obj).forEach(key => {
    if (fn(key, value) == true) {
      result[key] = value;
    }
  });

  return result;
}
