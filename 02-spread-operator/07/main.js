const obj = { name: 'John', age: 89, job: 'dev' };

function cloneObject(obj) {
  const clone = { ...obj };
  return clone;
}

console.log(cloneObject(obj));
