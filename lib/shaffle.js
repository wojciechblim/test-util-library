export function shaffle(array) {
  let parArray = array.slice(0, array.length);
  let arr = [];
  function los(max) {
    return Math.floor(Math.random() * max + 1);
  }

  for (let i = 0; i < array.length; i++) {
    let draw = los(parArray.length);
    arr.push(parArray[draw - 1]);
    parArray.splice(draw - 1, 1);
  }
  return arr;
}
