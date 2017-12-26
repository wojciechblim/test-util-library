export function unique(array) {
  return array.reduce((acc, item) => {
    if (acc.indexOf(item) == -1) {
      acc.push(item);
    }
    return acc;
  }, []);
}
