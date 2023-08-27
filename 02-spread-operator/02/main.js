arr = [1, 2, 3, 4, 5];

function spreadOperator(arr) {
  let newArr = [...arr];
  newArr[3] = newArr[3] ** 2;
  return newArr;
}

console.log(spreadOperator(arr));
console.log(arr);
