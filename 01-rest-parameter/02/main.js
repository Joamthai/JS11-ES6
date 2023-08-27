function filterOutOdds(...input) {
  let arr = [];
  for (let value of input) {
    if (value % 2 == 0) {
      arr.push(value);
    }
  }
  return arr;
}

console.log(filterOutOdds(2, 5, 6, 7, 8));
