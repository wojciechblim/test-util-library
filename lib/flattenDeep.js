export function flattenDeep(array) {
  return array.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? flattenDeep(item) : item);
  }, []);
}
