function doubleAndReturnArgs(arr, ...num) {
  let newNum = [];
  for (let value of num) {
    newNum.push(value * 2);
  }

  return [...arr, ...newNum];
}

console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
// expexted result: [1, 2, 3, 8, 8]
console.log(doubleAndReturnArgs([2], 10, 4));
// expexted result: [2, 20, 8]
