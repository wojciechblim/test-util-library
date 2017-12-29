export function filter(arr, fn) {
  return arr.reduce((acc, item, ind) => {
    if (fn(item, ind)) {
      acc.push(item);
    }
    return acc;
  }, []);
}
