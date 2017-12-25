function indexOf(num, arr) {
  return arr.reduce((acc, item, index) => {
    if (item == num) {
      acc = index;
      return acc;
    }
    return acc;
  }, -1);
}
