const arrays = [1, 2, 3, 4, 5];

function removeRandom(arr) {
  const maxNum = arr.length;
  const randomIndex = Math.floor(Math.random() * maxNum);
  arr.splice(randomIndex, 1);
  return arr;
}

console.log(removeRandom(arrays));
