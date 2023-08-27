function multiply(...input) {
  let result = 1;
  for (let value of input) {
    result *= value;
  }
  console.log(result);
}

multiply(2, 4, 5, 6, 10);
