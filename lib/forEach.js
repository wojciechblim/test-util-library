export function forEach(array, fn) {
  array.reduce(function(accumulator, actual, index, arr) {
    fn(actual, index, arr);
  }, null);
}
