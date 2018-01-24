export function zip() {
  let array = Array.prototype.slice.call(arguments);
  let length = array[0].length;
  let ar = [];
  for (let i = 0; i < length; i++) {
    let result = array.reduce(function(acc, item, index, arr) {
      acc.push(item[i]);
      return acc;
    }, []);
    ar.push(result);
  }
  return ar;
}
