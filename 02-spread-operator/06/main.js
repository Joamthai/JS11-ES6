const arrays = [1, 2, 3, 4, 5, 6, 7];

const cloneArray = (arr) => {
  const clone = [...arr];
  return clone;
};

console.log(cloneArray(arrays));
