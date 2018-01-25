export function sort(fn, array) {
  function equal(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }

  let item;
  let correct;

  do {
    correct = array.slice(0, array.length);
    for (let i = 0; i < array.length - 1; i++) {
      if (fn(array[i], array[i + 1]) > 0) {
        item = array[i];
        array[i] = array[i + 1];
        array[i + 1] = item;
      }
    }
  } while (equal(array, correct) == false);

  return array;
}
