const users = [
  { user: 'Name1' },
  { user: 'Name2', age: 2 },
  { user: 'Name2' },
  { user: 'Name3', age: 4 },
];

for (let value of users) {
  value.age
    ? console.log(`user: ${value.user}, age: ${value.age}`)
    : console.log(`user: ${value.user}, age: 'unknown'`);
}
