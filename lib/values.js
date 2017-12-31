export function values(obj) {
  return Object.keys(obj).reduce((acc, item) => {
    acc.push(obj[item]);
    return acc;
  }, []);
}
