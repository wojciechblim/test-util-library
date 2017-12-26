export function map(arr, fn) {
  return arr.reduce((acc, item, ind) => {
    acc.push(fn(item, ind));
    return acc;
  }, []);
}
