export function intersection(arr1, arr2) {
  return arr1.reduce((acc, item, index) => {
    if (arr1[index] == arr2[index]) {
      acc.push(item);
    }
    return acc;
  }, []);
}
