function mergeObjects(...obj) {
  let result = {};
  for (let value of obj) {
    result = { ...result, ...value };
  }
  return result;
}

console.log(mergeObjects({ name: 'aaa' }, { age: 50 }));
