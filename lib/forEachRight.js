export function forEachRight(array, fn) {
  array.reverse.reduce(function(acc, item, index, arr) {
    fn(item, index, arr);
  }, null);
}
