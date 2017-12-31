function indexOf(num, arr) {
  return arr.reduce((acc, item, index, arr) => {
    if (item === num) {
      acc.push(index);
    }
    if (index == arr.length - 1) {
      return acc[0] || -1;
    }
    return acc;
  }, []);
}
